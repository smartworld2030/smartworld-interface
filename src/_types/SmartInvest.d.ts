/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

export type SmartInvestMethod =
  | 'BTCB'
  | 'STTS'
  | 'calculateInterest'
  | 'calculatePercent'
  | 'hourlyReward'
  | 'investBnb'
  | 'investBtcb'
  | 'investStts'
  | 'maxPercent'
  | 'totalReward'
  | 'updateBnb'
  | 'updateBtcb'
  | 'updateStts'
  | 'userBalances'
  | 'userDepositDetails'
  | 'userDepositNumber'
  | 'userExpireTime'
  | 'userExpired'
  | 'userID'
  | 'users'
  | 'withdrawInterest'

interface SmartInvestInterface extends ethers.utils.Interface {
  functions: {
    'BTCB()': FunctionFragment
    'STTS()': FunctionFragment
    'calculateInterest(address)': FunctionFragment
    'calculatePercent(address,uint256)': FunctionFragment
    'hourlyReward(uint256)': FunctionFragment
    'investBnb(address)': FunctionFragment
    'investBtcb(address,uint256)': FunctionFragment
    'investStts(address,uint256)': FunctionFragment
    'maxPercent()': FunctionFragment
    'totalReward(uint256)': FunctionFragment
    'updateBnb()': FunctionFragment
    'updateBtcb(uint256)': FunctionFragment
    'updateStts(uint256)': FunctionFragment
    'userBalances(address)': FunctionFragment
    'userDepositDetails(address,uint256)': FunctionFragment
    'userDepositNumber(address)': FunctionFragment
    'userExpireTime(address)': FunctionFragment
    'userExpired(address)': FunctionFragment
    'userID()': FunctionFragment
    'users(address)': FunctionFragment
    'withdrawInterest()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'BTCB', values?: undefined): string
  encodeFunctionData(functionFragment: 'STTS', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'calculateInterest',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'calculatePercent',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'hourlyReward',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'investBnb', values: [string]): string
  encodeFunctionData(
    functionFragment: 'investBtcb',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'investStts',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'maxPercent', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'totalReward',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'updateBnb', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'updateBtcb',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'updateStts',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'userBalances', values: [string]): string
  encodeFunctionData(
    functionFragment: 'userDepositDetails',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'userDepositNumber',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'userExpireTime',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'userExpired', values: [string]): string
  encodeFunctionData(functionFragment: 'userID', values?: undefined): string
  encodeFunctionData(functionFragment: 'users', values: [string]): string
  encodeFunctionData(
    functionFragment: 'withdrawInterest',
    values?: undefined
  ): string

  decodeFunctionResult(functionFragment: 'BTCB', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'STTS', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'calculateInterest',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'calculatePercent',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'hourlyReward',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'investBnb', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'investBtcb', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'investStts', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'maxPercent', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalReward', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateBnb', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateBtcb', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateStts', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'userBalances',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'userDepositDetails',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'userDepositNumber',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'userExpireTime',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'userExpired', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'userID', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'users', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'withdrawInterest',
    data: BytesLike
  ): Result

  events: {
    'RegisterUser(address,address,uint256)': EventFragment
    'UpdateUser(address,uint256)': EventFragment
    'WithdrawInterest(address,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'RegisterUser'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'UpdateUser'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawInterest'): EventFragment
}

export class SmartInvest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: SmartInvestInterface

  functions: {
    BTCB(overrides?: CallOverrides): Promise<[string]>

    'BTCB()'(overrides?: CallOverrides): Promise<[string]>

    STTS(overrides?: CallOverrides): Promise<[string]>

    'STTS()'(overrides?: CallOverrides): Promise<[string]>

    calculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        hourly: BigNumber
        referral: BigNumber
        requestTime: BigNumber
      }
    >

    'calculateInterest(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        hourly: BigNumber
        referral: BigNumber
        requestTime: BigNumber
      }
    >

    calculatePercent(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'calculatePercent(address,uint256)'(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    hourlyReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'hourlyReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    investBnb(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'investBnb(address)'(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    investBtcb(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'investBtcb(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    investStts(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'investStts(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    maxPercent(overrides?: CallOverrides): Promise<[BigNumber]>

    'maxPercent()'(overrides?: CallOverrides): Promise<[BigNumber]>

    totalReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'totalReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    updateBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'updateBnb()'(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    updateBtcb(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'updateBtcb(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    updateStts(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'updateStts(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    userBalances(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bnb: BigNumber
        btcb: BigNumber
        stts: BigNumber
        satoshi: BigNumber
      }
    >

    'userBalances(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bnb: BigNumber
        btcb: BigNumber
        stts: BigNumber
        satoshi: BigNumber
      }
    >

    userDepositDetails(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }
    >

    'userDepositDetails(address,uint256)'(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }
    >

    userDepositNumber(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'userDepositNumber(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    userExpireTime(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'userExpireTime(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    userExpired(user: string, overrides?: CallOverrides): Promise<[boolean]>

    'userExpired(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    userID(overrides?: CallOverrides): Promise<[BigNumber]>

    'userID()'(overrides?: CallOverrides): Promise<[BigNumber]>

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber
        refID: BigNumber
        refAmounts: BigNumber
        refPercent: BigNumber
        latestWithdraw: BigNumber
      }
    >

    'users(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber
        refID: BigNumber
        refAmounts: BigNumber
        refPercent: BigNumber
        latestWithdraw: BigNumber
      }
    >

    withdrawInterest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'withdrawInterest()'(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  BTCB(overrides?: CallOverrides): Promise<string>

  'BTCB()'(overrides?: CallOverrides): Promise<string>

  STTS(overrides?: CallOverrides): Promise<string>

  'STTS()'(overrides?: CallOverrides): Promise<string>

  calculateInterest(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      hourly: BigNumber
      referral: BigNumber
      requestTime: BigNumber
    }
  >

  'calculateInterest(address)'(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      hourly: BigNumber
      referral: BigNumber
      requestTime: BigNumber
    }
  >

  calculatePercent(
    user: string,
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'calculatePercent(address,uint256)'(
    user: string,
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  hourlyReward(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'hourlyReward(uint256)'(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  investBnb(
    referrer: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'investBnb(address)'(
    referrer: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  investBtcb(
    referrer: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'investBtcb(address,uint256)'(
    referrer: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  investStts(
    referrer: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'investStts(address,uint256)'(
    referrer: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  maxPercent(overrides?: CallOverrides): Promise<BigNumber>

  'maxPercent()'(overrides?: CallOverrides): Promise<BigNumber>

  totalReward(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'totalReward(uint256)'(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  updateBnb(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'updateBnb()'(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  updateBtcb(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'updateBtcb(uint256)'(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  updateStts(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'updateStts(uint256)'(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  userBalances(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bnb: BigNumber
      btcb: BigNumber
      stts: BigNumber
      satoshi: BigNumber
    }
  >

  'userBalances(address)'(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bnb: BigNumber
      btcb: BigNumber
      stts: BigNumber
      satoshi: BigNumber
    }
  >

  userDepositDetails(
    user: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }>

  'userDepositDetails(address,uint256)'(
    user: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }>

  userDepositNumber(user: string, overrides?: CallOverrides): Promise<BigNumber>

  'userDepositNumber(address)'(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  userExpireTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

  'userExpireTime(address)'(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  userExpired(user: string, overrides?: CallOverrides): Promise<boolean>

  'userExpired(address)'(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  userID(overrides?: CallOverrides): Promise<BigNumber>

  'userID()'(overrides?: CallOverrides): Promise<BigNumber>

  users(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber
      refID: BigNumber
      refAmounts: BigNumber
      refPercent: BigNumber
      latestWithdraw: BigNumber
    }
  >

  'users(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber
      refID: BigNumber
      refAmounts: BigNumber
      refPercent: BigNumber
      latestWithdraw: BigNumber
    }
  >

  withdrawInterest(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'withdrawInterest()'(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    BTCB(overrides?: CallOverrides): Promise<string>

    'BTCB()'(overrides?: CallOverrides): Promise<string>

    STTS(overrides?: CallOverrides): Promise<string>

    'STTS()'(overrides?: CallOverrides): Promise<string>

    calculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        hourly: BigNumber
        referral: BigNumber
        requestTime: BigNumber
      }
    >

    'calculateInterest(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        hourly: BigNumber
        referral: BigNumber
        requestTime: BigNumber
      }
    >

    calculatePercent(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculatePercent(address,uint256)'(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    hourlyReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'hourlyReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    investBnb(referrer: string, overrides?: CallOverrides): Promise<boolean>

    'investBnb(address)'(
      referrer: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    investBtcb(
      referrer: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'investBtcb(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    investStts(
      referrer: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'investStts(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    maxPercent(overrides?: CallOverrides): Promise<BigNumber>

    'maxPercent()'(overrides?: CallOverrides): Promise<BigNumber>

    totalReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'totalReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    updateBnb(overrides?: CallOverrides): Promise<boolean>

    'updateBnb()'(overrides?: CallOverrides): Promise<boolean>

    updateBtcb(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    'updateBtcb(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    updateStts(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    'updateStts(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    userBalances(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bnb: BigNumber
        btcb: BigNumber
        stts: BigNumber
        satoshi: BigNumber
      }
    >

    'userBalances(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bnb: BigNumber
        btcb: BigNumber
        stts: BigNumber
        satoshi: BigNumber
      }
    >

    userDepositDetails(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }
    >

    'userDepositDetails(address,uint256)'(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reward: BigNumber; endTime: BigNumber }
    >

    userDepositNumber(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'userDepositNumber(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userExpireTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

    'userExpireTime(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userExpired(user: string, overrides?: CallOverrides): Promise<boolean>

    'userExpired(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    userID(overrides?: CallOverrides): Promise<BigNumber>

    'userID()'(overrides?: CallOverrides): Promise<BigNumber>

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber
        refID: BigNumber
        refAmounts: BigNumber
        refPercent: BigNumber
        latestWithdraw: BigNumber
      }
    >

    'users(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber
        refID: BigNumber
        refAmounts: BigNumber
        refPercent: BigNumber
        latestWithdraw: BigNumber
      }
    >

    withdrawInterest(overrides?: CallOverrides): Promise<boolean>

    'withdrawInterest()'(overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    RegisterUser(
      user: string | null,
      referrer: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; referrer: string; value: BigNumber }
    >

    UpdateUser(
      user: string | null,
      value: null
    ): TypedEventFilter<[string, BigNumber], { user: string; value: BigNumber }>

    WithdrawInterest(
      user: string | null,
      hourly: null,
      referrals: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; hourly: BigNumber; referrals: BigNumber }
    >
  }

  estimateGas: {
    BTCB(overrides?: CallOverrides): Promise<BigNumber>

    'BTCB()'(overrides?: CallOverrides): Promise<BigNumber>

    STTS(overrides?: CallOverrides): Promise<BigNumber>

    'STTS()'(overrides?: CallOverrides): Promise<BigNumber>

    calculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateInterest(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    calculatePercent(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculatePercent(address,uint256)'(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    hourlyReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'hourlyReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    investBnb(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'investBnb(address)'(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    investBtcb(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'investBtcb(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    investStts(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'investStts(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    maxPercent(overrides?: CallOverrides): Promise<BigNumber>

    'maxPercent()'(overrides?: CallOverrides): Promise<BigNumber>

    totalReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'totalReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    updateBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'updateBnb()'(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    updateBtcb(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'updateBtcb(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    updateStts(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'updateStts(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    userBalances(user: string, overrides?: CallOverrides): Promise<BigNumber>

    'userBalances(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userDepositDetails(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'userDepositDetails(address,uint256)'(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userDepositNumber(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'userDepositNumber(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userExpireTime(user: string, overrides?: CallOverrides): Promise<BigNumber>

    'userExpireTime(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userExpired(user: string, overrides?: CallOverrides): Promise<BigNumber>

    'userExpired(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    userID(overrides?: CallOverrides): Promise<BigNumber>

    'userID()'(overrides?: CallOverrides): Promise<BigNumber>

    users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'users(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    withdrawInterest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'withdrawInterest()'(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    BTCB(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'BTCB()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    STTS(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'STTS()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    calculateInterest(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateInterest(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    calculatePercent(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculatePercent(address,uint256)'(
      user: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    hourlyReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'hourlyReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    investBnb(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'investBnb(address)'(
      referrer: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    investBtcb(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'investBtcb(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    investStts(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'investStts(address,uint256)'(
      referrer: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    maxPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'maxPercent()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalReward(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'totalReward(uint256)'(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    updateBnb(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'updateBnb()'(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    updateBtcb(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'updateBtcb(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    updateStts(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'updateStts(uint256)'(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    userBalances(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'userBalances(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    userDepositDetails(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'userDepositDetails(address,uint256)'(
      user: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    userDepositNumber(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'userDepositNumber(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    userExpireTime(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'userExpireTime(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    userExpired(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'userExpired(address)'(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    userID(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'userID()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'users(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    withdrawInterest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'withdrawInterest()'(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
