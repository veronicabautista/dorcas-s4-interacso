import React from 'react';

class Header extends React.Component {
  render(){
     return (
       <div className="header__container">
         {/* He puesto las dos clases a falta de que elijamos la clase que nos quedamos*/}
         <h1 className="header__title header__title--which-dashboard">
           {this.props.title}
         </h1>
       </div>
    );
  }
}

export default Header;
