import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import Intarsia from './Intarsia'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intarsia" element={<Intarsia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App