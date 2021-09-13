//import * as Dapp from "@elrondnetwork/dapp";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Form from '../components/Form';

function Home() {
   return (
      <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
         <p className=" mx-4">
            test address: <br />
            <span className="font-bold text-xl">
               erd1qlnf8vnpxkj3wcf32zmw2krdkgqepc9gy9djvk5wd23maq8mzyqs26vss9
            </span>
         </p>
         <p className=" mx-4">
            test address Louis: <br />
            <span className="font-bold text-xl">
               erd1wlck2dncfrzj2cxm6rkzv0w9n97wxufp0tlvgklkjxtlvt3r667qrp0z4w
            </span>
         </p>
         <p className=" mx-4">
            test address Loris: <br />
            <span className="font-bold text-xl">
               erd1y45dahl58y2ksggxqd5p7ghnalrglchch0nzg4w6djwrk9guwy0sme7dul
            </span>
         </p>
         <Form />
         {/* <MainDashboard myAddress={ value.input }/> */}
      </div>
   );
}

export default Home;
