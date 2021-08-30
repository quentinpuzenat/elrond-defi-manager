import MainDashboard from '../components/MainDashboard';
import { useContext } from 'react';
import { AddressContext } from '../context';
import { useParams } from 'react-router';

const DashboardPage = () => {
   const value = useContext(AddressContext);
   let { erdAddress } = useParams();
   return (
      <>
         <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
            <MainDashboard myAddress={erdAddress} />
         </div>
      </>
   );
};

export default DashboardPage;
