import { Dispatch } from 'redux'
import {
  WALLET_FAILURE,
  WALLET_REQUEST,
  WALLET_ACTIVATED,
  WALLET_WAITING_MESSAGE,
  ONBOARDING_REQUEST,
  CHAIN_CHANGE_REQUEST,
  CHAIN_CHANGE_SUCCESS,
  CHAIN_CHANGE_FAILURE,
  ContractObject,
  PriceContract,
} from '../_types/wallet.types'
import { AppActions, AppState } from '../_types'
import { errorHandler, successHandler, warningHandler } from '../_helpers/alert'
import { supportedChain, tooShorter } from '../_helpers/constants'
import { ethereum } from '../_helpers/api'
import chainList from '../_helpers/chainList'
import { Contract, providers } from 'ethers'
import { onBoard } from '../_helpers/api'
import erc20 from '../_contracts/erc20'
import bank from '../_contracts/bank'
import invest from '../_contracts/invest'
import invest02 from '../_contracts/invest02'
import invest03 from '../_contracts/invest03'
import pool from '../_contracts/pool'
import { ACCOUNT_LOGGEDIN, ACCOUNT_LOGOUT } from '../_types/account.types'
import { accountTokenBalances } from './account.actions'
import tokenPrice from '../_contracts/tokenPrice'
import swap from '../_contracts/swap'
import { ISmartWorld } from '../_types/ISmartWorld'
import { ISmartInvest } from '../_types/ISmartInvest'
import { ISmartInvest02 } from '../_types/ISmartInvest02'
import { ISmartSwap } from '../_types/ISmartSwap'
import { ISmartPool02 } from '../_types/ISmartPool'
import stock from '_contracts/stock'
import { SmartGameStock } from '_types/SmartGameStock'

let timer: NodeJS.Timeout
let interval: NodeJS.Timeout

export let provider: providers.Web3Provider
export let signer: providers.JsonRpcSigner
export let tokenContract: ContractObject
export let priceContract: PriceContract
export let investContract: ISmartInvest
export let invest02Contract: ISmartInvest02
export let invest03Contract: ISmartInvest02
export let bankContract: ISmartWorld
export let swapContract: ISmartSwap
export let poolContract: ISmartPool02
export let stockContract: SmartGameStock

export const initialization =
  () => (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch({ type: WALLET_REQUEST })
    if (!getState().wallet.active) {
      if (ethereum) {
        provider = new providers.Web3Provider(ethereum, 'any')
        provider.send('eth_requestAccounts', [])
        signer = provider.getSigner()

        ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        ethereum.on('accountsChanged', () => {
          window.location.reload()
        })

        provider.on('network', ({ chainId }) => {
          dispatch({ type: CHAIN_CHANGE_REQUEST, payload: { chainId } })
          console.log(chainId)
          if (supportedChain(chainId)) {
            tokenContract = {
              STT: new Contract(erc20.address[chainId].stt, erc20.abi, signer),
              STTS: new Contract(
                erc20.address[chainId].stts,
                erc20.abi,
                signer
              ),
              BTCB: new Contract(
                erc20.address[chainId].btcb,
                erc20.abi,
                signer
              ),
              BUSD: new Contract(
                erc20.address[chainId].busd,
                erc20.abi,
                signer
              ),
              STC: new Contract(erc20.address[chainId].stc, erc20.abi, signer),
              STR: new Contract(erc20.address[chainId].str, erc20.abi, signer),
              LPTOKEN: new Contract(
                erc20.address[chainId].lptoken,
                erc20.abi,
                signer
              ),
            } as ContractObject
            investContract = new Contract(
              invest.address[chainId],
              invest.abi,
              signer
            ) as ISmartInvest
            invest02Contract = new Contract(
              invest02.address[chainId],
              invest02.abi,
              signer
            ) as ISmartInvest02
            invest03Contract = new Contract(
              invest03.address[chainId],
              invest03.abi,
              signer
            ) as ISmartInvest02
            bankContract = new Contract(
              erc20.address[chainId].stt,
              bank.abi,
              signer
            ) as ISmartWorld
            priceContract = new Contract(
              tokenPrice.address[chainId].btc,
              tokenPrice.abi,
              signer
            )
            swapContract = new Contract(
              swap.address[chainId],
              swap.abi,
              signer
            ) as ISmartSwap
            poolContract = new Contract(
              pool.address[chainId],
              pool.abi,
              signer
            ) as ISmartPool02
            stockContract = new Contract(
              stock.address[chainId],
              stock.abi,
              signer
            ) as SmartGameStock

            dispatch({
              type: WALLET_ACTIVATED,
              payload: {
                chainId,
              },
            })
            dispatch({ type: CHAIN_CHANGE_REQUEST, payload: { chainId } })
            successHandler('Connected To ' + chainList[chainId]?.name)
          } else {
            const msg = 'Please Change to Binance Smart Chain Mainnet!'
            warningHandler(msg)
            dispatch({
              type: CHAIN_CHANGE_FAILURE,
              payload: {
                error: {
                  code: 301,
                  msg,
                },
              },
            })
          }
          accountHandler()
        })
      } else {
        dispatch({
          type: WALLET_FAILURE,
          error: {
            msg: 'notAvailable',
            code: 401,
          },
        })
        const msg = 'Wallet Is not Available!'
        errorHandler(msg, WALLET_WAITING_MESSAGE)
        dispatch({
          type: WALLET_WAITING_MESSAGE,
          payload: { error: { msg, code: 401 } },
        })
      }
    }

    const accountHandler = (account?: string) => {
      dispatch({
        type: ACCOUNT_LOGOUT,
      })
      clearTimeout(timer)
      if (account) {
        timer = setTimeout(() => {
          signer.getAddress().then((address) => {
            dispatch({
              type: ACCOUNT_LOGGEDIN,
              payload: { address },
            })
            dispatch(
              accountTokenBalances(
                ['STT', 'STTS', 'BTCB', 'LPTOKEN'],
                address
              ) as any
            )
            successHandler(`Account Changed ${tooShorter(address)}`)
          })
        }, 1000)
      } else {
        dispatch({
          type: WALLET_WAITING_MESSAGE,
          payload: {
            error: {
              code: 301,
              msg: 'Waiting...',
            },
          },
        })
      }

      clearInterval(interval)
      interval = setInterval(async () => {
        const accounts = await ethereum?.request({ method: 'eth_accounts' })
        if (!account && accounts.length > 0) accountHandler(accounts[0])
        else if (account && accounts.length === 0) accountHandler()
      }, 1000)
    }
  }

export const changeToMain = () => (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: CHAIN_CHANGE_REQUEST })
  ethereum
    ?.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x38',
          chainName: 'Binance Smart Chain',
          nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: ['https://bsc-dataseed1.ninicoin.io'],
          blockExplorerUrls: ['https://bscscan.com'],
        },
      ],
    })
    .then((id) => {
      console.log(id)
      dispatch({
        type: CHAIN_CHANGE_SUCCESS,
        payload: { chainId: id },
      })
    })
    .catch((error) => {
      errorHandler(error.message, WALLET_FAILURE)
      dispatch({
        type: WALLET_FAILURE,
        error: { msg: 'Wallet Is not Available!', code: 401 },
      })
    })
}

export const startOnBoarding = () => (dispatch: Dispatch<AppActions>) => {
  dispatch({
    type: ONBOARDING_REQUEST,
    payload: { error: { msg: 'Waiting for MetaMask!', code: 304 } },
  })
  onBoard.startOnboarding()
}
