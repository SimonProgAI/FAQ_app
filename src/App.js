import React from 'react';
import {useState} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

import './App.css';

function App() {

  const [uname, unameSetter] = useState(null);

  const handleLogout = () => {
      unameSetter(null);
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="/" element={<Layout uname={uname}/>}>
              <Route index element={<Home uname={uname}/>}/>
              <Route path='register' element={<Register />}/>
              <Route path="logout" element={<Logout uname={uname} handleLogout={handleLogout} />} />
              <Route path="login" element={<Login unameSetter={unameSetter}/>} />
              <Route path="*" element={<NoPage />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
