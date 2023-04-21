import './App.css';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Nav/Navbar';
import MainHomePage from './components/HomePage/MainHomePage';
function App() {

  

  return (
  <>

 
<Navbar/>
    <Routes>
  
    <Route path="/" element={<MainHomePage />}/>
  
   {/* <Route path="*" element={<FourOFour/>}/> */}
    </Routes>

  </>
  );
}

export default App;


