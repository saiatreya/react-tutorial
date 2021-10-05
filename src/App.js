import './App.css';
import React from 'react';
import LeftNav from './components/styled/LeftNav';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Intro from './components/pages/Intro';
import MainContainer from './components/styled/MainContainer';
import ClassComponent from './components/pages/ClassComponent';
import LifeCycleHooks from './components/pages/LifeCycleHooks';
import ErrorBoundary from './components/pages/ErrorBoundary';
import PureComponent from './components/pages/PureComponents';
import Memo from './components/pages/Memo';
import Reference from './components/pages/Reference';
import ForwardReference from './components/pages/ForwardReference';
import PortalTemplate from './components/pages/PortalTemplate';
import HigherOrderExample1 from './components/pages/HigherOrderExample1';
import HigherOrderExample2 from './components/pages/HigherOrderExample2';
import RenderPropsComponent from './components/pages/RenderProps';
import CounterContext from './components/pages/CounterContext';
import useStateHook from './components/hooks/useStateHook';
import useEffectHook from './components/hooks/useEffectHook';
import IncrementCounterContextHook from './components/hooks/useContextHook';
import useReducerHook from './components/hooks/useReducerHook';
import useCallbackHookComponent from './components/hooks/useCallbackHook';
import useMemoHook from './components/hooks/useMemoHook';
import useRefHook from './components/hooks/useRefHook';
import Counter1 from './components/hooks/CustomCounterHook';
import useImperativeHandleHook from './components/hooks/useImperativeHandleHook';
import useLayoutEffectHook from './components/hooks/useLayoutEffectHook';
import RouterHooks from './components/hooks/RouterHooks';
import Lazy from './components/hooks/Lazy';
import { Provider } from 'react-redux';
import store from './redux/store';
import cakeIceCream from './components/cakeIceCream/cakeIceCream';

const activeStyles = {
  background: 'orange',
  color: '#fff',
  textDecoration: 'none',
  padding: '5px',
  display: 'block'
}
function App() {
  return (
    <React.Fragment>
      <Router>
        <LeftNav>
          <NavLink to="/" activeStyle={activeStyles} exact>Introduction</NavLink>
          <NavLink to="/components" exact activeStyle={activeStyles}>Class & Functional Components</NavLink>
          <NavLink to="/life-cycle" exact activeStyle={activeStyles}>Life Cycle Methods</NavLink>
          <NavLink to="/pure" exact activeStyle={activeStyles}>Pure Components</NavLink>
          <NavLink to="/memo" exact activeStyle={activeStyles}>Memo</NavLink>
          <NavLink to="/ref" exact activeStyle={activeStyles}>Ref</NavLink>
          <NavLink to="/forward-ref" exact activeStyle={activeStyles}>Forward Ref</NavLink>
          <NavLink to="/portal" exact activeStyle={activeStyles}>Portals</NavLink>
          <NavLink to="/higher-order" exact activeStyle={activeStyles}>Higher Order Components</NavLink>
          <NavLink to="/render" exact activeStyle={activeStyles}>Render Props Pattern</NavLink>
          <NavLink to="/context" exact activeStyle={activeStyles}>React Context API</NavLink>
          <NavLink to="/use-state" exact activeStyle={activeStyles}>useState</NavLink>
          <NavLink to="/use-effect" exact activeStyle={activeStyles}>useEffect</NavLink>
          <NavLink to="/use-context" exact activeStyle={activeStyles}>useContext</NavLink>
          <NavLink to="/use-reducer" exact activeStyle={activeStyles}>useReducer</NavLink>
          <NavLink to="/use-callback" exact activeStyle={activeStyles}>useCallback</NavLink>
          <NavLink to="/use-memo" exact activeStyle={activeStyles}>useMemo</NavLink>
          <NavLink to="/use-ref" exact activeStyle={activeStyles}>useRef</NavLink>
          <NavLink to="/use-imperative-handle" exact activeStyle={activeStyles}>useImperativeHandle</NavLink>
          <NavLink to="/use-layout-effect" exact activeStyle={activeStyles}>useLayoutEffect</NavLink>
          <NavLink to="/custom-hook" exact activeStyle={activeStyles}>Custom Hook</NavLink>
          <NavLink to={
            {
              pathname: "/router-hook/Niranjan",
              state: {
                surName: 'Atreyapurapu'
              }
            }
          } exact activeStyle={activeStyles}>Router Hook</NavLink>
          <NavLink to="/lazy" exact activeStyle={activeStyles}>Lazy Load a Component</NavLink>
          <NavLink to="/redux" exact activeStyle={activeStyles}>Redux</NavLink>
        </LeftNav>
        <Provider store={store}>
          <MainContainer>
            <Switch>
              <Route path="/" exact component={Intro} />
              <Route path="/components" exact component={ClassComponent} />
              <Route path="/life-cycle" exact render={() => {
                return (<ErrorBoundary>
                  <LifeCycleHooks />
                </ErrorBoundary>)
              }} />
              <Route path="/pure" exact component={PureComponent} />
              <Route path="/memo" exact component={Memo} />
              <Route path="/ref" exact component={Reference} />
              <Route path="/forward-ref" exact component={ForwardReference} />
              <Route path="/portal" exact component={PortalTemplate} />
              <Route path="/higher-order" exact render={() => {
                return (
                  <React.Fragment>
                    <HigherOrderExample1 name="Higher Order Example 1" />
                    <HigherOrderExample2 name="Higher Order Example 2" />
                  </React.Fragment>
                )
              }
              } />
              <Route path="/render" exact component={RenderPropsComponent} />
              <Route path="/context" exact component={CounterContext} />
              <Route path="/use-state" exact component={useStateHook} />
              <Route path="/use-effect" exact component={useEffectHook} />
              <Route path="/use-context" exact component={IncrementCounterContextHook} />
              <Route path="/use-reducer" exact component={useReducerHook} />
              <Route path="/use-callback" exact component={useCallbackHookComponent} />
              <Route path="/use-memo" exact component={useMemoHook} />
              <Route path="/use-ref" exact component={useRefHook} />
              <Route path="/use-imperative-handle" exact component={useImperativeHandleHook} />
              <Route path="/use-layout-effect" exact component={useLayoutEffectHook} />
              <Route path="/custom-hook" exact component={Counter1} />
              <Route path="/router-hook/:id" exact component={RouterHooks} />
              <Route path="/router-hook/:id/:name" render={(props) => props.match.params.name} />
              <Route path="/lazy" exact component={Lazy} />
              <Route path="/redux" exact component={cakeIceCream} />
              <Route path="*">404 ERROR</Route>
            </Switch>
          </MainContainer>
        </Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;
