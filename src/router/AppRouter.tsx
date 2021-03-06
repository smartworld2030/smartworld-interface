import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Investment from '../components/Wallet/Invest'
import Investment02 from '../components/Wallet/Invest02'
import Swap from '../components/Wallet/Swap'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { AbsoluteBody } from '../components/Layout/divs/Divs'
import { AppActions, AppState } from '../_types'
import { accountTokenBalances } from '../_actions/account.actions'
import Info from '../components/Wallet/Info'
import ProtectedRoute from './ProtectedRoute'
import { Container, Row, Col } from 'react-grid-system'
import Typography from 'antd/lib/typography'
import { tokenPrices, bankTotalSatoshi } from '../_actions/bank.actions'
import { invest02Information } from '../_actions/invest02.actions'
import { poolInformation } from '../_actions/pool.actions'
import {
  initialization,
  invest02Contract,
  poolContract,
  stockContract,
} from '../_actions/wallet.actions'
import Pool from '../components/Wallet/Pool'
import { ExclamationTriangle } from '../components/Layout/svgs/ExclamationTriangle'
import { investInformation } from '../_actions/invest.actions'
import { stockInformation } from '../_actions/stock.actions'
import { Modal } from 'antd'
import Game from 'components/Wallet/Game'

let SHOWED = false

interface IProps {
  isMobile: boolean
  height: number
  width: number
  detailHandler: () => void
}

type AppRouterProps = IProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const info = () =>
  Modal.info({
    title: `New Investment update.`,
    content: (
      <ul>
        <li>You can only invest by BNB from now on.</li>
        <li>5% fee of investment will be saved in the pool.</li>
        <li>Minimum investment reduced from 100$ to 50$.</li>
      </ul>
    ),
    onOk() {
      localStorage.setItem('investupdate', 'accepted')
    },
  })

const Titles = {
  '/invest': 'INVESTMENT',
  '/invest02': 'INVESTMENT02',
  '/info': 'INFORMATION',
  '/pool': 'POOL',
  '/swap': 'SWAP',
  '/nft': 'NFT',
  '/game': 'GAME',
}

const priceDelay = 10
const detailsDelay = 30
let timer
let routeTimer

export const AppRouter: React.FC<AppRouterProps> = ({
  detailHandler,
  isMobile,
  address,
  height,
  width,
  active,
  init,
  tokenPrices,
  poolInformation,
  bankTotalSatoshi,
  stockInformation,
  investInformation,
  invest02Information,
}) => {
  const location = useLocation()
  const { pathname } = location

  const isAccepted = useMemo(
    () => localStorage.getItem('investupdate') === 'accepted',
    []
  )

  useEffect(() => {
    setTimeout(() => {
      console.log('initialization')
      init()
    }, 1000)
  }, [init])

  useEffect(() => {
    clearInterval(timer)
    if (active) {
      tokenPrices()
      bankTotalSatoshi()
      timer = setInterval(() => {
        tokenPrices()
        bankTotalSatoshi()
      }, priceDelay * 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [active, bankTotalSatoshi, tokenPrices])

  useEffect(() => {
    if (!SHOWED && !isAccepted && pathname === '/invest02') {
      SHOWED = true
      info()
    }
  }, [isAccepted, pathname])

  useEffect(() => {
    const switcher = () => {
      switch (pathname.toLocaleLowerCase()) {
        case '/pool':
          if (poolContract) poolInformation()
          break
        // case '/invest':
        //   if (investContract) investInformation()
        //   break
        case '/invest02':
          if (invest02Contract) invest02Information()
          break
        case '/game':
          if (stockContract) stockInformation()
          break
        case '/swap':
          break
        default:
          break
      }
    }
    clearInterval(routeTimer)
    if (address) {
      switcher()
      routeTimer = setInterval(() => {
        switcher()
      }, detailsDelay * 1000)
    }
    return () => {
      clearInterval(routeTimer)
    }
  }, [
    pathname,
    address,
    poolInformation,
    investInformation,
    invest02Information,
    stockInformation,
  ])

  const transitions = useTransition(location, {
    key: pathname,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    pathname !== '/nft' && (
      <Container
        fluid
        style={{
          width,
          height,
          transition: 'all 1s',
          background: `url(${require('../assets/c.jpg').default})`,
        }}
      >
        <Row justify="center" align="center">
          <Col>
            <Row justify="between" style={{ width: '100%', margin: 0 }}>
              <Row style={{ width: width / 3 }} justify="start">
                {Titles[pathname] === 'INVESTMENT02' && (
                  <Typography.Link onClick={info}>New update!</Typography.Link>
                )}
              </Row>
              <Row justify="center" style={{ width: width / 3 }}>
                <Typography.Title
                  style={{ margin: 0, position: 'relative' }}
                  level={5}
                >
                  {Titles[pathname]}
                  {Titles[pathname] === 'INVESTMENT02' ||
                  Titles[pathname] === 'INVESTMENT' ||
                  Titles[pathname] === 'POOL' ? (
                    <ExclamationTriangle onClick={detailHandler} />
                  ) : null}
                </Typography.Title>
              </Row>
              <Row style={{ width: width / 3 }} justify="end">
                {Titles[pathname] === 'POOL' && (
                  <Typography.Link
                    href="https://pancakeswap.finance/add/BNB/0x88469567A9e6b2daE2d8ea7D8C77872d9A0d43EC"
                    target="_blank"
                  >
                    Liquidity Pool
                  </Typography.Link>
                )}
                {Titles[pathname] === 'SWAP' && (
                  <Typography.Link
                    href="https://pancakeswap.finance/swap?exactField=input&exactAmount=1&outputCurrency=0x88469567A9e6b2daE2d8ea7D8C77872d9A0d43EC"
                    target="_blank"
                  >
                    PanckakeSwap
                  </Typography.Link>
                )}
              </Row>
            </Row>
          </Col>
          <Col
            xs={12}
            style={{
              position: 'relative',
              height: height - 20,
              padding: 0,
            }}
          >
            {transitions((style, item, _, key) => (
              <AbsoluteBody
                height={isMobile ? undefined : 300}
                width={width - 32}
              >
                <animated.div key={key} style={style}>
                  <Switch location={item}>
                    <Route exact path="/invest">
                      <ProtectedRoute
                        isMobile={isMobile}
                        height={height}
                        needLogin
                      >
                        <Investment isMobile={isMobile} />
                      </ProtectedRoute>
                    </Route>
                    <Route exact path="/invest02">
                      <ProtectedRoute
                        isMobile={isMobile}
                        height={height}
                        needLogin
                      >
                        <Investment02 isMobile={isMobile} />
                      </ProtectedRoute>
                    </Route>
                    <Route exact path={['/pool', '/freeze']}>
                      <ProtectedRoute isMobile={isMobile} height={height}>
                        <Pool isMobile={isMobile} />
                      </ProtectedRoute>
                    </Route>
                    <Route exact path="/nft" />
                    <Route exact path="/game">
                      <ProtectedRoute isMobile={isMobile} height={height}>
                        <Game isMobile={isMobile} width={width} />
                      </ProtectedRoute>
                    </Route>
                    <Route exact path="/info">
                      <Info isMobile={isMobile} />
                    </Route>
                    <Route exact path="/swap">
                      <ProtectedRoute isMobile={isMobile} height={height}>
                        <Swap isMobile={isMobile} />
                      </ProtectedRoute>
                    </Route>
                    <Route path="/">
                      <Redirect to="/invest02" />
                    </Route>
                  </Switch>
                </animated.div>
              </AbsoluteBody>
            ))}
          </Col>
        </Row>
      </Container>
    )
  )
}

interface tester {
  isMobile: boolean
}

export const NFT: React.FC<tester> = () => {
  return null
}

const mapStateToProps = (state: AppState) => {
  const { active } = state.wallet
  const { address } = state.account
  return {
    active,
    address,
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  init: bindActionCreators(initialization, dispatch),
  tokenPrices: bindActionCreators(tokenPrices, dispatch),
  bankTotalSatoshi: bindActionCreators(bankTotalSatoshi, dispatch),
  poolInformation: bindActionCreators(poolInformation, dispatch),
  stockInformation: bindActionCreators(stockInformation, dispatch),
  investInformation: bindActionCreators(investInformation, dispatch),
  invest02Information: bindActionCreators(invest02Information, dispatch),
  accountTokenBalances: bindActionCreators(accountTokenBalances, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
