import React from 'react-dom';
 
import '../App.css'



function PrimeiroBox( ) {
  return (    
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
              <img src="imagens/img6.jpg" className="img-fluid" alt='' />
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
 
  );
}

export default PrimeiroBox;
