import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Dapp from '@elrondnetwork/dapp'; // Wallet Connect

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; //GraphQL

import './index.css';
import Home from './pages/Home';
import Team from './pages/Team';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import Error from './components/Error404';
import AddressProvider from './context';

import reportWebVitals from './reportWebVitals';

// imports for Wallet Connect
const walletConnectBridge = 'https://bridge.walletconnect.org';
const walletConnectDeepLink =
   'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/';

const network = {
   id: 'devnet',
   name: 'Devnet',
   egldLabel: 'xEGLD',
   walletAddress: 'https://devnet-wallet.elrond.com/dapp/init',
   apiAddress: 'https://devnet-api.elrond.com',
   gatewayAddress: 'https://devnet-gateway.elrond.com',
   explorerAddress: 'http://devnet-explorer.elrond.com/',
};

// imports for GRAPH QL
const MaiarExchangeClient = new ApolloClient({
   uri: 'https://devnet-exchange-graph.elrond.com/graphql',
   cache: new InMemoryCache(),
});

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Dapp.Context
            config={{
               network, // provide connection information
               walletConnectBridge, // the server used to relay data between the Dapp and the Wallet
               walletConnectDeepLink, // link used to open the Maiar app with the connection details
            }}
         >
            <ApolloProvider client={MaiarExchangeClient}>
               <AddressProvider>
                  <Header />
                  <Switch>
                     <Route path="/" exact>
                        <Home />
                     </Route>
                     <Route path="/team" exact>
                        <Team />
                     </Route>
                     <Route path="/:erdAddress">
                        <DashboardPage />
                     </Route>
                     <Route /* main unlock route */
                        path="/unlock" /* main unlock route */
                        component={() => (
                           <Dapp.Pages.Unlock
                              callbackRoute="/team" /* route after successfull login */
                              title="App Title"
                              lead="Please select your login method:"
                              ledgerRoute="/ledger" /* route after choosing ledger login */
                              walletConnectRoute="/walletconnect" /* route after choosing Maiar login */
                           />
                        )}
                        exact={true}
                     />
                     <Route
                        path="/ledger" /* must correspond to ledgerRoute */
                        component={() => (
                           <Dapp.Pages.Ledger callbackRoute="/team" />
                        )}
                        exact={true}
                     />
                     <Route
                        path="/walletconnect" /* must correspond to walletConnectRoute */
                        component={() => (
                           <Dapp.Pages.WalletConnect
                              callbackRoute="/team"
                              logoutRoute="/home" /* redirect after logout */
                              title="Maiar Login"
                              lead="Scan the QR code using Maiar"
                           />
                        )}
                        exact={true}
                     />
                     <Route>
                        <Error />
                     </Route>
                  </Switch>
               </AddressProvider>
            </ApolloProvider>
         </Dapp.Context>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
