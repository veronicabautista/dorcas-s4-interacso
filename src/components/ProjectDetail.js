import React from 'react';
import Header from './Header';
import Notifications from './Notifications';

class ProjectDetail extends React.Component {
  render(){
     return (
      <div className="detailedprojects__container">
        <Header />
        <div className=""></div>
        <Notifications />
      </div>
    );
  }
}

export default ProjectDetail;
