import React from 'react-dom';
import { FaBars } from 'react-icons/fa';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
          <div className="container">

            <a href="index.html" className="navbar-brand">
              <img src="imagens/spotify.svg" width="142" />
            </a>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-principal">
              <i className="fas fa-bars text-white"><FaBars /></i>
            </button>

            <div className="collapse navbar-collapse" id="nav-principal">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="" className="nav-link">Premium</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Ajuda</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Baixar</a>
                </li>

                <li className="nav-item divisor"></li>

                <li className="nav-item">
                  <a href="" className="nav-link">Inscrever-se</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Entrar</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </header>

      <section id="home" className="d-flex">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-12 capa">

              <h1>Música para todos</h1>
              <a href="" className="btn btn-lg btn-custom btn-roxo">
                Aproveite o Spotify Free
              </a>

              <a href="" className="btn btn-lg btn-custom btn-branco">
                Obter Spotify Premium
              </a>

            </div>
          </div>
        </div>
      </section>

      <section id='servicos' >
        <div className='container'>
          <div className='row'>
            <div col-md-6>
              imagens
            </div>
            <div col-md-6>
              conteudos
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
