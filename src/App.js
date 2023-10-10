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
              <img src="imagens/spotify.svg" width="142" alt='' />
            </a>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-principal">
              <i className="fas fa-bars text-white"><FaBars /></i>
            </button>

            <div className="collapse navbar-collapse" id="nav-principal">
              <ul className="navbar-nav ml-auto">
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

      <section id="home" className="d-flex">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-12 capa">

              <h1>Música para todos</h1>
              <a href="/" className="btn btn-lg btn-custom btn-roxo">
                Aproveite o Spotify Free
              </a>

              <a href="/" className="btn btn-lg btn-custom btn-branco">
                Obter Spotify Premium
              </a>

            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="caixa">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row albuns">
                <div className="d-none d-lg-none d-md-block col-md-6">
                  <img src="imagens/img1.jpg" className="img-fluid" alt='' />
                </div>
                <div className="d-none d-lg-none pb-4 d-md-block col-md-6">
                  <img src="imagens/img2.jpg" className="img-fluid" alt='' />
                </div>
                <div className="col-md-6">
                  <img src="imagens/img5.jpg" className="img-fluid" alt='' />
                </div>
                <div className="col-md-6">
                  <img src="imagens/img2.jpg" className="img-fluid" alt='' />
                </div>
              </div>
              <div className="row albuns">
                <div className="col-md-6">
                  <img src="imagens/img3.jpg" className="img-fluid" alt='' />
                </div>
                <div className="col-md-6">
                  <img src="imagens/img4.jpg" className="img-fluid" alt='' />
                </div>
              </div>
            </div>
            <div className="col-md-6">

              <h2>O que o Spotify tem?</h2>

              <h3>Músicas</h3>
              <p>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um só lugar.</p>

              <h3>Playlists</h3>
              <p>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</p>

              <h3>Novos lançamentos</h3>
              <p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>

            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="caixa">
        <div className="container">
          <div className="row">
            <div className="col-md-4">

              <h2>Fácil</h2>
              <h3>Buscar</h3>
              <p>Já sabe o que quer escutar? É só procurar e apertar o play.
              </p>

              <h3>Navegar</h3>
              <p>Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para o seu momento.
              </p>

              <h3>Descobrir</h3>
              <p>Curta músicas novas toda segunda-feira com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios.
              </p>

            </div>
            <div className="col-md-8 d-none d-md-block">
              <div className="row rotacionar">
                <div className="col-md-6">
                  <img src="imagens/iphone1.png" className="img-fluid" alt='' />
                </div>
                <div className="col-md-6">
                  <img src="imagens/iphone2.png" className="img-fluid" alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img id='logo' src="imagens/spotify.svg" width={142} className="img-fluid" alt='' />    </div>
            <div className='col-md-2'>
              <h4>Company</h4>
              <ul className='navbar-nav'>
                <li>
                  <a href='/'>Sobre</a>
                </li>
                <li>
                  <a href='/'>Empregos</a>
                </li>
                <li>
                  <a href='/'>Imprensa</a>
                </li>
                <li>
                  <a href='/'>Novidades</a>
                </li>
              </ul>
            </div>
            <div className='col-md-2'>
              <h4>Comunidades</h4>
              <ul className='navbar-nav'>
                <li>
                  <a href='/'>Artistas</a>
                </li>
                <li>
                  <a href='/'>Desenvolvedores</a>
                </li>
                <li>
                  <a href='/'>Marcas</a>
                </li>
              </ul></div>
            <div className='col-md-2'>
              <h4>Links Úteis</h4>
              <ul className='navbar-nav'>
                <li>
                  <a href='/'>Ajuda</a>
                </li>
                <li>
                  <a href='/'>Presentes</a>
                </li>
                <li>
                  <a href='/'>Player da web</a>
                </li>
              </ul>
            </div>
            <div className='col-md-4 '>
              <ul className='navbar-nav flex-row justify-content-end'>
                <li>
                  <a href='/'>
                    <img src="imagens/facebook.png" className="img-fluid" alt='' />
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <img src="imagens/instagram.png" className="img-fluid" alt='' />
                  </a>
                </li>
                <li>
                  <a href='/'> <img src="imagens/twitter.png" className="img-fluid" alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
