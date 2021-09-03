import MainDashboard from '../components/MainDashboard';
import ShowTransactions from '../components/ShowTransactions';

import { useParams } from 'react-router';

const DashboardPage = () => {
   let { erdAddress } = useParams();
   return (
      <>
         <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
            <MainDashboard myAddress={erdAddress} />
         </div>
         <div className="w-full ">
            <ShowTransactions myAddress={erdAddress} />
         </div>
      </>
   );
};

export default DashboardPage;
