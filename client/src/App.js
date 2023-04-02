import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from './store';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';

export default function App() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route
              path='/signup'
              element={status ? <Navigate to='/' /> : <Signup />}
            />
            <Route
              path='/signin'
              element={status ? <Navigate to='/' /> : <Signin />}
            />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}
