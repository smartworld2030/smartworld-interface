import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-grid-system'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { removeError } from '../../../../_actions/invest.actions'
import { AppActions, AppState } from '../../../../_types'
import {
  convertNumbers2English,
  formatToString,
  percentToValue,
  truncate,
  valueToPercent,
} from '../../../../_helpers/api'
import DepositCircle from '../../../Layout/svgs/DepositCircle'
import TokenCircle from '../../../Layout/svgs/TokenCircle'
import DepositInfo from './DepositInfo'

interface IProps {
  isMobile: boolean
}
type DepositSectionProps = IProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const tokenNames = ['STTS', 'BNB', 'BTCB']

export const DepositSection: React.FC<DepositSectionProps> = ({
  isMobile,
  tokens,
  prices,
  error,
  removeError,
}) => {
  const [token, setToken] = useState('STTS')
  const [value, setValue] = useState<string>()

  useEffect(() => {
    return () => {
      setValue(undefined)
    }
  }, [token])

  const minimumAmount = (t: string) =>
    truncate(
      formatToString(500000 / prices[t]),
      t === 'STTS' ? 1 : 3,
      t !== 'BTCB'
    )

  const percentHandler = (per: number) => {
    if (error) removeError()
    setValue(percentToValue(tokens[token], per))
  }

  const inputHandler = (val: string) => {
    if (error) removeError()
    val = convertNumbers2English(val)
    if (val.length <= 20 && /^\d*\.?\d*$/.test(val))
      setValue(val === '00' ? Number(val).toString() : val === '.' ? '0.' : val)
  }

  const maxButtonHandler = () => {
    percentHandler(100)
  }

  return (
    <Row direction="row" style={{ height: '100%' }}>
      <Col md={2}>
        <Row
          direction={isMobile ? 'row' : 'column'}
          justify="around"
          align="center"
          style={{ height: '100%' }}
        >
          {tokenNames.map((t) => (
            <TokenCircle
              key={t}
              width={70}
              onClick={setToken}
              token={t}
              active={token === t}
              info={minimumAmount(t)}
            />
          ))}
        </Row>
      </Col>
      <Col md={4}>
        <Row justify="around" align="center" style={{ height: '100%' }}>
          <DepositCircle
            maxButtonHandler={maxButtonHandler}
            width={isMobile ? 210 : 190}
            token={token}
            value={value}
            placeholder={tokens[token].toString()}
            percent={valueToPercent(Number(value), tokens[token])}
            inputHandler={inputHandler}
            percentHandler={percentHandler}
          />
        </Row>
      </Col>
      <Col md={6}>
        <DepositInfo token={token} value={Number(value ?? 0)} />
      </Col>
    </Row>
  )
}
const mapStateToProps = (state: AppState) => {
  const { tokens, address, loggedIn } = state.account
  const { error } = state.invest
  const { prices } = state.bank
  return {
    address,
    loggedIn,
    prices,
    tokens,
    error,
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  removeError: bindActionCreators(removeError, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DepositSection)
