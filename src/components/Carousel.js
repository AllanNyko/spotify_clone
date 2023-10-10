import React from 'react-dom';
import { FaMusic } from 'react-icons/fa';


const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h1>Música para todos</h1>
          <a href="/" class="btn btn-custom btn-roxo">
            Aproveite o Spotify Free
          </a>
          <a href="/" class="btn  btn-custom btn-branco">
            Obter Spotify Premium
          </a>
        </div>
        <div class="carousel-item">
          <h1>As melhores rádios</h1>
          <a href="/" class="btn btn-lg btn-custom btn-branco">
            < FaMusic /> Ouça agora
          </a>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


  );
}

export default Carousel;