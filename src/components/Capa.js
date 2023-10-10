import React from 'react-dom';
 
import '../App.css'



function Capa({children}) {
  return (    
      <section id="home" className="d-flex">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-12 capa">
              {children}
            </div>
          </div>
        </div>
      </section>
 
  );
}

export default Capa;
