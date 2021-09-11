import React from 'react';
import * as Dapp from '@elrondnetwork/dapp';
import { routes, routeNames } from '../../routes';
import Header from './Header';

const Layout = ({ children }) => {
   const { loggedIn } = Dapp.useContext();
   const refreshAccount = Dapp.useRefreshAccount();

   React.useEffect(() => {
      if (loggedIn) {
         refreshAccount();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loggedIn]);

   return (
      <div className="bg-light flex flex-col flex-wrap">
         <Header />
         <main className="flex flex-col">
            <Dapp.Authenticate routes={routes} unlockRoute={routeNames.unlock}>
               {children}
            </Dapp.Authenticate>
         </main>
      </div>
   );
};

export default Layout;
