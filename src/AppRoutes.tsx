import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Impact from './components/Impact'
import AboutUS from './components/AboutUS'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' index={true} element={<Home />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/aboutus' element={<AboutUS/>} />
        <Route path='/*' element={<Home />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
