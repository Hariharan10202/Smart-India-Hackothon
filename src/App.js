import React from 'react';
import Home from './Pages/Home/Home';
import SidePane from './Components/SidePane/SidePane.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';

const App = () => {
  return (
    <div className='App'>
      <SidePane />
      <div className='container'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
