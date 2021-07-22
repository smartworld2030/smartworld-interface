import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Row, Col } from 'react-grid-system'
import { AppActions, AppState } from '../../../_types'
import BnbSwap from './BnbSwap'
import SttSwap from './SttSwap'
import { PriceValue } from './PriceValue'
import { tokenPrices } from '../../../_actions/bank.actions'

interface IProps {
  isMobile: boolean
}

type SwapProps = IProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const Swap: React.FC<SwapProps> = ({
  isMobile,
  tokens,
  prices,
  dollar,
  tokenPrices,
}) => {
  useEffect(() => {
    let timer
    clearInterval(timer)
    tokenPrices()
    timer = setInterval(() => {
      tokenPrices()
    }, 30 * 1000)

    return () => {
      clearInterval(timer)
    }
  }, [tokenPrices])
  return (
    <Row
      justify="around"
      style={{ minHeight: isMobile ? 750 : 300 }}
      direction={isMobile ? 'column' : 'row'}
    >
      <Col xs={12}>
        <Row justify="around">
          {Object.keys(tokens)
            .reverse()
            .map(
              (token) =>
                token !== 'BTCB' && (
                  <PriceValue
                    token={token}
                    prices={prices}
                    value={tokens[token]}
                    dollar={dollar}
                    key={token}
                  />
                )
            )}
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <BnbSwap />
      </Col>
      <Col xs={12} md={4}>
        <SttSwap />
      </Col>
    </Row>
  )
}

const mapStateToProps = (state: AppState) => {
  const { tokens, error, address } = state.account
  const { prices, dollar } = state.bank
  const { chainId } = state.wallet
  return {
    chainId,
    address,
    tokens,
    dollar,
    prices,
    error,
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  tokenPrices: bindActionCreators(tokenPrices, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Swap)
