import DashboardPage from './pages/DashboardPage';
import Home from './pages/Home';
import Team from './pages/Team';
import * as Dapp from "@elrondnetwork/dapp"

import { dAppName } from './config.devnet';
import withPageTitle from './components/PageTitle';

type RouteType = Dapp.RouteType & { title: string };

export const routeNames = {
   home: '/',
   dashboard: '/dashboard',
   team: '/team',
   unlock: '/unlock',
   ledger: '/ledger',
   walletconnect: '/walletconnect',
};

export const routes : RouteType[]= [
   {
      path: '/',
      title: 'Home',
      component: Home,
   },
   {
      path: '/dashboard',
      title: 'Dashboard',
      component: DashboardPage,
      authenticatedRoute: true,
   },
   {
      path: '/team',
      title: 'Team',
      component: Team,
   },
];


const wrappedRoutes = () =>
  routes.map((route) => {
    const title = route.title
      ? `${route.title} • DeFi Manager`
      : `DeFi Manager`;
    return {
      path: route.path,
      authenticatedRoute: Boolean(route.authenticatedRoute),
      component: withPageTitle(
        title,
        route.component,
      ) as any as React.ComponentClass<any, any>,
    };
  });

export default wrappedRoutes();
