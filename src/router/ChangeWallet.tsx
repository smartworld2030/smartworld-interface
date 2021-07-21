import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, AppState } from '../_types'
import { Col } from 'antd/lib/grid'
import { RowBody } from '../components/Layout/divs/Divs'
import { StyledDiv } from '../components/Layout/divs/Sections'
import { changeToMain, startOnBoarding } from '../_actions/wallet.actions'
import Typography from 'antd/lib/typography'
import Button from 'antd/lib/button'

type IChangeWallet = { isMobile: boolean } & ReturnType<
  typeof mapDispatchToProps
> &
  ReturnType<typeof mapStateToProps>

const ChangeWallet: React.FC<IChangeWallet> = ({
  error,
  changeToMain,
  startOnBoarding,
}) => (
  <RowBody>
    <Col
      xs={{ span: 22 }}
      lg={{ span: 7 }}
      style={{ textAlign: 'center', paddingTop: 50 }}
    >
      <Typography style={{ padding: 50 }}>{error.msg}</Typography>
      {error.code === 401 && (
        <Button type="primary" onClick={() => startOnBoarding()}>
          Install MetaMask
        </Button>
      )}
      {error.code === 301 && (
        <StyledDiv>
          <Button type="primary" onClick={() => changeToMain()}>
            Connect
          </Button>
        </StyledDiv>
      )}
    </Col>
  </RowBody>
)

const mapStateToProps = (state: AppState) => {
  const { error, waiting } = state.wallet
  return {
    error,
    waiting,
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  changeToMain: bindActionCreators(changeToMain, dispatch),
  startOnBoarding: bindActionCreators(startOnBoarding, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeWallet)