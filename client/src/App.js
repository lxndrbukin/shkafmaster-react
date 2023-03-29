import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
            <Routes>
              <Route path='/signup' element={<Signup />} />
            </Routes>
            <Routes>
              <Route path='/signin' element={<Signin />} />
            </Routes>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
