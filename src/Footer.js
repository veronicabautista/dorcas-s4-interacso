import React from 'react';

class Footer extends React.Component {
  render(){
     return (
      <div className="footer__container">
        <div className="footer__notif-number"></div>
        <div className="footer__notif-details">
          <div className="detail__notif-category"></div>
          <div className="detail__notif-content"></div>
          <div className="detail__notif-time"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
