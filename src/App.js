import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='register' element={<Register />}/>
              <Route path="logout" element={<Logout />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
