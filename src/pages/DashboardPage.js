import MainDashboard from '../components/MainDashboard';
import ShowTransactions from '../components/ShowTransactions';
import MaiarExchangePrices from '../components/MaiarExchangePrices';

import { useParams } from 'react-router';

const DashboardPage = () => {
   let { erdAddress } = useParams();
   return (
      <>
         <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
            <MainDashboard myAddress={erdAddress} />
         </div>
         <div className="bg-blue-600">
            <MaiarExchangePrices />
         </div>
         <div className="w-full ">
            <ShowTransactions myAddress={erdAddress} />
         </div>
      </>
   );
};

export default DashboardPage;
