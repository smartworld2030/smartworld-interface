import { Dispatch } from 'redux'
import { errorHandler, warningHandler, successHandler } from '../_helpers/alert'
import { invest02Contract, invest03Contract, provider } from './wallet.actions'
import {
  INVEST02_TRANSACTION_MINED,
  INVEST02_METHOD_REQUEST,
  INVEST02_METHOD_FAILURE,
  INVEST02_METHOD_SUCCESS,
  INVEST02_ACCOUNT_REQUEST,
  INVEST02_ACCOUNT_FAILURE,
  INVEST02_ACCOUNT_SUCCESS,
  INVEST02_MESSAGES,
  INVEST02_TRANSACTION_READY,
} from '../_types/invest02.types'
import { formaterNumber, bytesFormater } from '../_helpers/api'
import { AppActions, AppState } from '../_types'
import { Transaction } from 'ethers'
import info from '../_contracts/info'
import { accountTokenBalances } from './account.actions'
import { parseEther, isAddress } from 'ethers/lib/utils'

export const removeError = () => (dispatch: Dispatch<AppActions>) =>
  dispatch({ type: INVEST02_MESSAGES, payload: { error: '' } })

export const requestInvest03 =
  (method: any, args: any) => (dispatch: Dispatch<AppActions>) => {
    dispatch({ type: INVEST02_METHOD_REQUEST, payload: { method } })
    // @ts-ignore
    invest03Contract.functions[method](...args)
      .then((transaction: Transaction) => {
        if (transaction.hash) {
          dispatch({
            type: INVEST02_METHOD_SUCCESS,
            payload: { transaction },
          })
          warningHandler('Transaction Pending', null, transaction.hash)
          provider.once(transaction.hash, (e) => {
            dispatch({
              type: INVEST02_TRANSACTION_MINED,
            })
            setTimeout(() => {
              dispatch({
                type: INVEST02_TRANSACTION_READY,
              })
            }, 5000)
            successHandler('Transaction Confirmed', null, transaction.hash)
            dispatch(invest02Information() as any)
            dispatch(accountTokenBalances(['BTCB', 'STT', 'STTS']) as any)
          })
        }
      })
      .catch((err) => {
        dispatch({ type: INVEST02_METHOD_FAILURE, payload: err })
        errorHandler(err)
      })
  }

export type TokenSymbol = 'STTS' | 'BTCB' | 'BNB'

export const investment02Deposit =
  (v: string) =>
  async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const referrer = getState().router.location.query.ref

    const value = parseEther(v)
    let ref = isAddress(referrer) ? referrer : info.addressZero
    dispatch(requestInvest03('invest', [ref, { value }]) as any)
  }

export const migrateAndWithdraw =
  () => async (dispatch: Dispatch<AppActions>) => {
    dispatch(requestInvest03('migrateAndWithdrawInterest', []) as any)
  }

export const withdrawInterest =
  () => async (dispatch: Dispatch<AppActions>) => {
    dispatch(requestInvest03('withdrawInterest', []) as any)
  }

export const invest02Information =
  (address?: string) =>
  async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    if (!address) address = getState().account.address
    dispatch({ type: INVEST02_ACCOUNT_REQUEST })
    const fee = await invest03Contract.FEE()
    const minimum = await invest03Contract.MINIMUM_AMOUNTS()

    const oldAccountInfo: any = await readInvest02(
      'users',
      ['totalAmount'],
      [address]
    )

    const accountInfo: any = await readInvest03(
      'users',
      ['totalAmount'],
      [address]
    )
    const needMigrate =
      accountInfo.totalAmount === 0 && oldAccountInfo.totalAmount > 0

    if (accountInfo.totalAmount > 0 || needMigrate) {
      const items = [
        {
          name: 'calculateInterest',
          tokens: ['hourly', 'referral'],
          args: [address],
        },
        {
          name: 'userDepositNumber',
          tokens: ['deposits'],
          args: [address],
        },
        {
          name: 'users',
          tokens: ['totalAmount', 'refPercent', 'latestWithdraw'],
          args: [address],
        },
        {
          name: 'blacklist',
          tokens: ['isBlocked'],
          args: [address],
        },
      ]

      Promise.all(
        items.map((item) =>
          needMigrate
            ? readInvest02Items(item.name, item.tokens, item.args)
            : readInvest03Items(item.name, item.tokens, item.args)
        )
      )
        .then((data: any) => {
          const account: any = {}
          data.forEach((its) =>
            its.map((info) => {
              return (account[info.item] = info.balance)
            })
          )
          if (account.deposits > 0) {
            const deps = Array.from(Array(account.deposits))
            Promise.all(
              deps.map((_, i) =>
                needMigrate
                  ? readInvest02Items(
                      'userDepositDetails',
                      ['period', 'reward', 'endTime', 'amount', 'startTime'],
                      [address, i]
                    )
                  : readInvest03Items(
                      'userDepositDetails',
                      ['period', 'reward', 'endTime', 'amount', 'startTime'],
                      [address, i]
                    )
              )
            ).then((deposits: any) => {
              account.depositDetails = []
              deposits.forEach((item, i) =>
                item.map(
                  (info) =>
                    (account.depositDetails[i] = {
                      ...account.depositDetails[i],
                      [info.item]: info.balance,
                    })
                )
              )
              dispatch({
                type: INVEST02_ACCOUNT_SUCCESS,
                payload: {
                  account,
                  needMigrate,
                  fee: formaterNumber(fee, 3),
                  minimum: formaterNumber(minimum, 8),
                },
              })
            })
          }
        })
        .catch((err) => {
          errorHandler(err)
          dispatch({
            type: INVEST02_ACCOUNT_FAILURE,
            payload: {
              error: err,
              needMigrate,
              fee: formaterNumber(fee, 3),
              minimum: formaterNumber(minimum, 8),
            },
          })
        })
    } else {
      dispatch({
        type: INVEST02_ACCOUNT_FAILURE,
        payload: {
          error: '',
          needMigrate,
          fee: formaterNumber(fee, 3),
          minimum: formaterNumber(minimum, 8),
        },
      })
    }
  }

export const readInvest02Items = async (method: any, items: any[], args: any) =>
  new Promise((resolve, reject) =>
    invest02Contract[method](...args)
      .then((res) => {
        const array: any[] = []
        items.map((item: string) =>
          items.length > 1 || item === 'totalAmount'
            ? array.push({ item, balance: formaterNumber(res[item], item) })
            : array.push({
                item,
                balance: item === 'isBlocked' ? res : bytesFormater(res),
              })
        )
        resolve(array)
      })
      .catch((err) => reject(err))
  )

export const readInvest03Items = async (method: any, items: any[], args: any) =>
  new Promise((resolve, reject) =>
    invest03Contract[method](...args)
      .then((res) => {
        const array: any[] = []
        items.map((item: string) =>
          items.length > 1 || item === 'totalAmount'
            ? array.push({ item, balance: formaterNumber(res[item], item) })
            : array.push({
                item,
                balance: item === 'isBlocked' ? res : bytesFormater(res),
              })
        )
        resolve(array)
      })
      .catch((err) => reject(err))
  )

export const readInvest02 = async (method: any, items: any[], args: any) =>
  new Promise((resolve, reject) =>
    invest02Contract[method](...args)
      .then((res) => {
        const array: any[] = []
        items.map((item: string) => {
          return item === 'referrer'
            ? (array[item] = res[item])
            : items.length > 1
            ? (array[item] = formaterNumber(res[item], item))
            : (array[item] = bytesFormater(res[item]))
        })
        resolve(array)
      })
      .catch((err) => reject(err))
  )

export const readInvest03 = async (method: any, items: any[], args: any) =>
  new Promise((resolve, reject) =>
    invest03Contract[method](...args)
      .then((res) => {
        const array: any[] = []
        items.map((item: string) => {
          return item === 'referrer'
            ? (array[item] = res[item])
            : items.length > 1
            ? (array[item] = formaterNumber(res[item], item))
            : (array[item] = bytesFormater(res[item]))
        })
        resolve(array)
      })
      .catch((err) => reject(err))
  )
