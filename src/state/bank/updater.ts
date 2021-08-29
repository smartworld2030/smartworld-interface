import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import useDebounce from 'hooks/useDebounce'
import { updateBankStates } from './actions'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useBankContract, useBtcPriceContract } from 'hooks/useContract'
import {
  MultiCallMultipleData,
  singleContractMultiCallRequest,
  multiCallMultipleData,
  resConverter,
} from 'state/multicall/hooks'
import { getMulticallContract } from 'utils/contractHelpers'
import useBlockNumber from 'state/application/hooks'
import useIsWindowVisible from 'hooks/useIsWindowVisible'

export default function Updater(): null {
  const dispatch = useDispatch()
  const bankContract = useBankContract()
  const tokenPrice = useBtcPriceContract()
  const { chainId, account } = useActiveWeb3React()
  const multiContract = getMulticallContract()
  const latestBlockNumber = useBlockNumber()
  const windowVisible = useIsWindowVisible()

  const [data, setData] = useState({})

  const calls = useMemo(
    () => [
      {
        ifs: bankContract.interface,
        address: bankContract.address,
        methods: ['totalSatoshi', 'sttPrice', 'btcToSatoshi', 'bnbToSatoshi', 'sttsToSatoshi'],
        args: [[], [], [String(10 ** 18)], [String(10 ** 18)], [String(10 ** 8)]],
      },
      {
        ifs: tokenPrice.interface,
        address: tokenPrice.address,
        methods: ['latestAnswer'],
        args: [[]],
      },
    ],
    [bankContract, tokenPrice],
  )

  useEffect(() => {
    if (!latestBlockNumber || !windowVisible) return
    async function multiCallRequest() {
      const results = await multiCallMultipleData(multiContract, calls, { requireSuccess: false })
      setData(results)
    }
    if (calls) {
      multiCallRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calls, windowVisible, latestBlockNumber])

  const compiledStates = useMemo(() => {
    if (!Object.keys(data).length) return undefined
    return Object.keys(data).reduce(
      (items, method) =>
        data[method] && {
          ...items,
          [method]: resConverter(data[method]),
        },
      {},
    )
  }, [data])

  const states = useDebounce(compiledStates, 500)

  useEffect(() => {
    if (!chainId || !states || !Object.keys(states).length) return
    dispatch(
      updateBankStates({
        chainId,
        states,
      }),
    )
  }, [states, chainId, dispatch])

  return null
}
