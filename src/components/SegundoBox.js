import React from 'react-dom';

import '../App.css'



function SegundoBox() {
  return (
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
  );
}

export default SegundoBox;
