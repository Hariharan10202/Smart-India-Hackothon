import React from 'react';
import Home from './Pages/Home/Home';
import SidePane from './Components/SidePane/SidePane.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Events from './Pages/Events/Events';
import Notification from './Pages/Notification/Notification';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

const App = () => {
  const user = false;

  return (
    <div className='App'>
      {user && <SidePane />}
      <div className='container'>
        <Router>
          {user && <Navbar />}
          <Routes>
            <Route exact path='/' element={user ? <Home /> : <Navigate to='/register' />} />
            <Route path='/Myprofile' element={user ? <Profile /> : <Navigate to='/register' />} />
            <Route path='/projects' element={user ? <Projects /> : <Navigate to='/register' />} />
            <Route path='/events' element={user ? <Events /> : <Navigate to='/register' />} />
            <Route
              path='/notifications'
              element={user ? <Notification /> : <Navigate to='/register' />}
            />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Login />} />
            <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
