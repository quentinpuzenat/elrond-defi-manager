import React from 'react';
import '../App.css';

//import * as Dapp from "@elrondnetwork/dapp";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MyNavbar from './MyNavbar';
import MainDashboard from './MainDashboard';
import Form from './Form';


function App() {
  return (
    <div className="App bg-white">
      <MyNavbar />
      <Form />
      <MainDashboard />
    </div>
  );
}

export default App;
