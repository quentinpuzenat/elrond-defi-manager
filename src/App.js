import * as Dapp from '@elrondnetwork/dapp'; // Wallet Connect
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Error from './components/Error404';
import AddressProvider from './context';
import { ContextProvider } from './context/contextProvider';
import routes, { routeNames } from './routes';
import {
   network,
   walletConnectBridge,
   walletConnectDeepLink,
} from './config.devnet';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; //GraphQL

// imports for GRAPH QL
const MaiarExchangeClient = new ApolloClient({
   uri: 'https://devnet-exchange-graph.elrond.com/graphql',
   cache: new InMemoryCache(),
});

const App = () => {
   return (
      <>
         <ContextProvider>
            <Dapp.Context
               config={{
                  network, // provide connection information
                  walletConnectBridge, // the server used to relay data between the Dapp and the Wallet
                  walletConnectDeepLink, // link used to open the Maiar app with the connection details
               }}
            >
               <ApolloProvider client={MaiarExchangeClient}>
                  <AddressProvider>
                     <Layout>
                        <Switch>
                           {/* <Route path="/" exact>
                              <Home />
                           </Route>
                           <Route path="/team" exact>
                              <Team />
                           </Route>
                           <Route path="/:erdAddress">
                              <DashboardPage />
                           </Route> */}
                           <Route
                              path={routeNames.unlock}
                              component={() => (
                                 <Dapp.Pages.Unlock
                                    callbackRoute={routeNames.dashboard}
                                    lead="Please select your login method:"
                                    ledgerRoute={routeNames.ledger}
                                    walletConnectRoute={
                                       routeNames.walletconnect
                                    }
                                 />
                              )}
                              exact={true}
                           />
                           <Route
                              path={routeNames.ledger}
                              component={() => (
                                 <Dapp.Pages.Ledger
                                    callbackRoute={routeNames.dashboard}
                                 />
                              )}
                              exact={true}
                           />
                           <Route
                              path={routeNames.walletconnect}
                              component={() => (
                                 <Dapp.Pages.WalletConnect
                                    callbackRoute={routeNames.dashboard}
                                    logoutRoute={routeNames.home}
                                    title="Maiar Login"
                                    lead="Scan the QR code using Maiar"
                                 />
                              )}
                              exact={true}
                           />
                           {routes.map((route, i) => (
                              <Route
                                 path={route.path}
                                 key={route.path + i}
                                 component={route.component}
                                 exact={true}
                              />
                           ))}
                           <Route>
                              <Error />
                           </Route>
                        </Switch>
                     </Layout>
                  </AddressProvider>
               </ApolloProvider>
            </Dapp.Context>
         </ContextProvider>
      </>
   );
};

export default App;
