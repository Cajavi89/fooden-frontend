import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppProvider } from './context/store';
import Layout from './pages/Layout';
import Home from './pages/Home';
import RegisterForm from './Components/RegisterForm';
import RegisterSuccess from './Components/RegisterSuccess';
import LoginForm from './Components/LoginForm';
import ProfileModal from './Components/ProfileModal';
import UploadImagesForm from './Components/UploadImagesForm';
import MenuComponent from './Components/MenuComponent';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<ProfileModal />} />
          </Route>
          <Route path="registrarse" element={<RegisterForm />} />
          <Route path="register-success" element={<RegisterSuccess />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="atachimages" element={<UploadImagesForm />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
