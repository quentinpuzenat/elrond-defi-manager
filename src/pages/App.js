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
    <div className="App bg-white">
      {/* <MyNavbar /> */}
      <Form parentCallback={ handleAddressCallback }/>
      <MainDashboard myAddress={ myAddress }/>
    </div>
  );
}

export default App;
