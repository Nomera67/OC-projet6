import { useState, useSEffect, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Error from './pages/error/Error';
import Housing from './pages/housing/Housing';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import './App.scss'

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('./assets/logements/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home logements={logements} />} />
        <Route path='/housing/:id' element={<Housing logements={logements} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
