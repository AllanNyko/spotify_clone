import React from 'react-dom';
import { FaBars } from 'react-icons/fa';


 const Navbar =()=>{
  return(
    <header>
      
      <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
    <div className="container">

      <a href="index.html" className="navbar-brand">
        <img src="imagens/spotify.svg" width="142" alt='' />
      </a>

      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-principal">
        <i className="fas fa-bars text-white"><FaBars /></i>
      </button>

      <div className="collapse navbar-collapse" id="nav-principal">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Premium</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Ajuda</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Baixar</a>
          </li>

          <li className="nav-item divisor"></li>

          <li className="nav-item">
            <a href="/" className="nav-link">Inscrever-se</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Entrar</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  </header>
  );
} 

export default Navbar;