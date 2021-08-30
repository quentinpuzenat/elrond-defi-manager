import React, {useContext} from 'react';

//import * as Dapp from "@elrondnetwork/dapp";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainDashboard from '../components/MainDashboard';
import Form from '../components/Form';
import { AddressContext } from '../context';

function App() {

  const value = useContext(AddressContext)

  return (
    <div className="h-full bg-gray-50 bg-opacity-75 pt-20">
      {/* <MyNavbar /> */}
      <Form />
      <MainDashboard myAddress={ value.input }/>
    </div>
  );
}

export default App;
