import React from 'react';
import * as Dapp from '@elrondnetwork/dapp';
import { routes, routeNames } from '../../routes';
import Header from './Header';
import Footer from './Footer';

import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
   const location = useLocation();

   console.log(location);

   const { loggedIn } = Dapp.useContext();
   const refreshAccount = Dapp.useRefreshAccount();

   React.useEffect(() => {
      if (loggedIn) {
         refreshAccount();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loggedIn]);

   return (
      <div className="bg-gray-50 flex flex-col flex-wrap">
         <Header />
         <div className="bg-gray-50"></div>
         {children}
         {/* <Dapp.Authenticate routes={routes} unlockRoute={routeNames.unlock}>
            {children}
         </Dapp.Authenticate> */}
         <Footer />
      </div>
   );
};

export default Layout;
