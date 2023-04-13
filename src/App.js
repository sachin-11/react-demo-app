import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TipsScreen from './screens/TipsScreen';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main  className='py-3'>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/tips" element={<TipsScreen />} />
            </Routes>
          </Container>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

