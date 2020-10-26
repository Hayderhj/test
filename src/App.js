// @vendors
import React, {createContext, useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//@ components
import Home from './containers/home'
import NotFound from './containers/not-found'

// @styles
import './App.scss';

// @state
import { getInitialState } from './state';

// @reducers
import { votesReducer } from './reducers';

// @context
export const AppStateContext = createContext();

function App() {
  const [appState, dispatch] = useReducer(votesReducer, getInitialState());
	return (
    <AppStateContext.Provider
      value={{
        appState,
        dispatch
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppStateContext.Provider>
  );
}

export default App;
