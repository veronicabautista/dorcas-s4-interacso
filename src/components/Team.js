import React from "react";
import Header from './Header';
import Footer from './Footer';
import '../App.css'

class Team extends React.Component {
  render() {
    return (
      <div className="team__container">
        <Header />
        <div className="main__container-team">
          <div className="dashborad chart__tasks"><p className="tasks-title">Tareas Semana</p></div>
          <div className="dashborad chart__commits"><p className="commits-title">Commits Semana</p></div>
          <div className="dashborad average__container-commits"><p className="commits-number">5</p><p className="commits-text">Commits/dia/persona</p></div>
          <div className="dashborad average__container-tasks"><p className="tasks-number">4</p><p className="tasks-text">Tareas/dia/persona</p></div>
          <div className="dashborad people__container-asana"><p className="asana-title">Asana killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">145</p><p className="killer-detail">Tareas completadas esta semana</p></div>
          <div className="dashborad people__container-git"><p className="git-title">Git killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">305</p><p className="killer-detail">Commits esta semana</p></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;