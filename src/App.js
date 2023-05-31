

import React, {useState} from 'react';
import './App.css';


import NavBar from './components/NavBar';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import OnlineModeCard from './components/OnlineModeCard';
// import Button from './components/Button'
import MasterVolumeCard from './components/MasterVolumeCard'
import SoundQualityCard from './components/SoundQualityCard'
import Dashboard from './components/Dashboard';






function App() {
  const [loggedIn, setLoggedin] = useState(false)
 

  const handleLogin = () => {
    setLoggedin(!loggedIn)
  }

  console.log(loggedIn)



  return (
  
    <div className="App">
      <NavBar/>
  

      {loggedIn ? <Dashboard/> : <Login  handleLogin={ handleLogin } /> }

      
      
    </div>
  );
}

export default App;
