import React from 'react';

const RegisterForm = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Martinez"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo@correo.com"
          />
        </div>
        <div>
          <label htmlFor="password">Contrasena</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default RegisterForm;
