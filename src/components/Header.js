import React from 'react';

class Header extends React.Component {
  render(){
     return (
       <div className="header__container">
         <h1 className="header__title">
           <p className="header__title--which-dashboard">Proyectos</p>
         </h1>
       </div>
    );
  }
}

export default Header;