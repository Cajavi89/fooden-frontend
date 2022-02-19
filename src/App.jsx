import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import RegisterForm from './Components/RegisterForm';
import RegisterSuccess from './Components/RegisterSuccess';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="registrarse" element={<RegisterForm />} />
        <Route path="register-success" element={<RegisterSuccess />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
