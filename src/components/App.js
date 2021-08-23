import React from 'react';
import '../App.css';

import MyNavbar from './MyNavbar';
import MainDashboard from './MainDashboard';

function App() {
  return (
    <div className="App bg-white">
      <MyNavbar />
      <MainDashboard />
    </div>
  );
}

export default App;
