import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppProvider } from './context/store';
import Layout from './pages/Layout';
import Home from './pages/Home';
import RegisterForm from './Components/RegisterForm';
import RegisterSuccess from './Components/RegisterSuccess';
import ProfileModal from './Components/ProfileModal';
import NewRestaurantForm from './Components/NewRestaurantForm';
import { getAllRestaurantsHandler } from './context/actions';

function App() {
  useEffect(() => {
    getAllRestaurantsHandler();
  }, []);

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<ProfileModal />} />
          </Route>
          <Route path="registrarse" element={<RegisterForm />} />
          <Route path="register-success" element={<RegisterSuccess />} />
          <Route path="registrar-restaurante" element={<NewRestaurantForm />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
