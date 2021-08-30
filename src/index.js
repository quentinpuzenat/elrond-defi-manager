import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./index.css"
import App from './pages/App';
import Team from './pages/Team';
import Header from './components/Header';
import Error from './components/Error404';
import AddressProvider from './context';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AddressProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </AddressProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
