import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from './store';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddItem from './components/AddItem';
import AddCategory from './components/AddCategory';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

export default function App() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
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
            <Route path='/admin/add-item' element={<AddItem />} />
            <Route path='/admin/add-category' element={<AddCategory />} />
            <Route path='/catalog' element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}
