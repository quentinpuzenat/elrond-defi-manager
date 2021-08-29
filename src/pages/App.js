import React, {useState} from 'react';

//import * as Dapp from "@elrondnetwork/dapp";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainDashboard from '../components/MainDashboard';
import Form from '../components/Form';


function App() {

  let [myAddress, setMyAddress] = useState("");

  const handleAddressCallback = (childData) => {
        setMyAddress(childData);

  
  }

  return (
    <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
      {/* <MyNavbar /> */}
      <Form parentCallback={ handleAddressCallback }/>
      <MainDashboard myAddress={ myAddress }/>
    </div>
  );
}

export default App;
