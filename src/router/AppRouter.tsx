import React, { lazy, useState } from 'react'
import { usePollBlockNumber } from 'state/block/hooks'
import useEagerConnect from 'hooks/useEagerConnect'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { AbsoluteBody } from 'components/Layout/divs/Divs'
import { Container, Row, Col } from 'react-grid-system'
import GlobalStyle from 'style/Global'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from 'components/Wallet/Swap/AddLiquidity/redirects'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/Loader/PageLoader'
import RedirectOldRemoveLiquidityPathStructure from 'components/Wallet/Swap/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly, RedirectToSwap } from 'components/Wallet/Swap/Swap/redirects'
import { BoxProps, Language, Menu, Modal, Heading, CogIcon, Button, IconButton, useModal } from '@smartworld-libs/uikit'

import UserMenu from 'components/Menu/UserMenu'
import { InjectedProps } from '@smartworld-libs/uikit/dist/widgets/Modal/types'
import useTheme from 'hooks/useTheme'

const AddLiquidity = lazy(() => import('components/Wallet/Swap/AddLiquidity'))
const Liquidity = lazy(() => import('components/Wallet/Swap/Pool'))
const PoolFinder = lazy(() => import('components/Wallet/Swap/PoolFinder'))
const RemoveLiquidity = lazy(() => import('components/Wallet/Swap/RemoveLiquidity'))
const Investment = lazy(() => import('components/Wallet/Invest'))
const Swap = lazy(() => import('components/Wallet/Swap/Swap'))
const Info = lazy(() => import('components/Wallet/Info'))
const Pool = lazy(() => import('components/Wallet/Pool'))
const STB = lazy(() => import('components/Wallet/STB'))

const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}))

interface IProps {
  isMobile: boolean
  height: number
  width: number
}

type AppRouterProps = IProps

const Titles = {
  '/invest': 'INVESTMENT',
  '/info': 'INFORMATION',
  '/pool': 'POOL',
  '/swap': 'SWAP',
  '/stb': 'STB',
}

export const AppRouter: React.FC<AppRouterProps> = ({ isMobile, height, width }) => {
  const location = useLocation()
  const { pathname } = location
  const {
    theme: {
      colors: { background },
    },
  } = useTheme()

  usePollBlockNumber()
  useEagerConnect()

  const transitions = useTransition(location, {
    key: pathname,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <Container
      fluid
      style={{
        width,
        height,
      }}
    >
      <GlobalStyle />
      <Row justify="between" align="center">
        <Col xs={12} style={{ padding: 0 }}>
          <Menu
            isDark={false}
            toggleTheme={() => {}}
            userMenu={<UserMenu />}
            globalMenu={<GlobalMenuComponent />}
            currentLang="EN"
            langs={langs}
            setLang={() => {}}
            links={[
              {
                label: 'Home',
                icon: 'HomeIcon',
                href: '/',
              },
            ]}
            title={Titles[pathname]}
          />
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
            //@ts-ignore
            <AbsoluteBody height={isMobile ? undefined : 320} width={width}>
              <animated.div key={key} style={{ ...style, background }}>
                <SuspenseWithChunkError fallback={<PageLoader />}>
                  <Switch location={item}>
                    <Route exact strict path="/info">
                      <Info isMobile={isMobile} />
                    </Route>
                    <Route exact strict path="/invest">
                      <Investment isMobile={isMobile} />
                    </Route>
                    <Route exact strict path={['/pool', '/freeze']}>
                      <Pool isMobile={isMobile} />
                    </Route>
                    <Route exact strict path="/stb">
                      <STB isMobile={isMobile} />
                    </Route>
                    <Route exact strict path="/swap" component={Swap} />
                    <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                    <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                    <Route exact strict path="/find" component={PoolFinder} />
                    <Route exact strict path="/liquidity" component={Liquidity} />
                    <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                    <Route exact path="/add" component={AddLiquidity} />
                    <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                    <Route exact path="/create" component={AddLiquidity} />
                    <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                    <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                    <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                    <Route path="/">
                      <Redirect to="/invest" />
                    </Route>
                  </Switch>
                </SuspenseWithChunkError>
              </animated.div>
            </AbsoluteBody>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default AppRouter

export interface ModalProps extends InjectedProps, BoxProps {
  title: string
  hideCloseButton?: boolean
  onBack?: () => void
  bodyPadding?: string
  headerBackground?: string
  minWidth?: string
}

const GlobalMenuModal: React.FC<ModalProps> = ({ title, onDismiss, ...props }) => {
  const [isChecked, setIsChecked] = useState(false)

  const toggle = () => setIsChecked(!isChecked)
  return (
    <Modal title={title} onDismiss={onDismiss} {...props}>
      <Heading>{title}</Heading>
      {/* <ThemeSwitcher toggleTheme={toggle} isDark={isChecked} /> */}
      <Button>This button Does nothing</Button>
    </Modal>
  )
}

const GlobalMenuComponent: React.FC = () => {
  const [onPresent1] = useModal(<GlobalMenuModal title="Global Settings Modal" />)

  return (
    <IconButton onClick={onPresent1} variant="tertiary" scale="sm">
      <CogIcon color="textSubtle" />
    </IconButton>
  )
}
