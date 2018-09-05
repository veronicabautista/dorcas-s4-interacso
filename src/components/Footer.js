import React from 'react';

class Footer extends React.Component {
  render(){
     return (
      <div className="footer__container">
        <div className="footer__notif-number">NOTIFICACIONES (3)</div>
        <div className="footer__notif-details">
          <div className="detail__notif-category">Nueva tarea</div>
          <div className="detail__notif-content">Flecha: borrar artista</div>
          <div className="detail__notif-time">Hace 20 minutos</div>
        </div>
      </div>
    );
  }
}

export default Footer;