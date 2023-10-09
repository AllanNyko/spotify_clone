import React from 'react-dom';
import {FaBars} from 'react-icons/fa';
import './App.css'

function App() {
  return (
    <div className="App"> 
      <header>
      <nav className='navbar navbar-expand-md navbar-transparent navbar-light fixed-top' >
          <div className='container'>
            <a className='navbar-brand' href='/index.html'>
              <img src='/imagens/spotify.svg' width={142} alt='' />
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navbarSupportedContent'>
              <FaBars color='white'/>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Premium</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Ajuda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Baixar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Inscrever-se</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Entrar</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>  
    </div>
  );
}

export default App;
