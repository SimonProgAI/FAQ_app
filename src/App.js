import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
