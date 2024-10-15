import React from 'react';
import './FooterBar.css'; // Asegúrate de importar el archivo CSS

const FooterBar = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Acerca de nosotros</h3>
            <p>Somos una empresa que se dedica a...</p>
          </div>
          <div className="col-md-4">
            <h3>Redes sociales</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterBar;