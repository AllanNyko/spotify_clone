import React from 'react-dom'; 


const Footer = () => {
  return (
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
  
  );
}

export default Footer;