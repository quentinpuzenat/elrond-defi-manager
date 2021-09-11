import * as Dapp from '@elrondnetwork/dapp';
import DashboardPage from './pages/DashboardPage';
import Home from './pages/Home';
import Team from './pages/Team';

export const routeNames = {
   home: '/',
   dashboard: '/dashboard',
   team: '/team',
   unlock: '/unlock',
   ledger: '/ledger',
   walletconnect: '/walletconnect',
};

export const routes = [
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

export default routes;
