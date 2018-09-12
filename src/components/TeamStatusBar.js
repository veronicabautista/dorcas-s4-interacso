import React from 'react';

class TeamStatusBar extends React.Component {
  render(){
    return (
      <div className= "average__container">
        <div className= "dashborad average__container-commits">
          <p className= "commits-number">{this.props.averageCommits}</p>
          <p className= "commits-text">Commits/dia/persona</p>
        </div>
        <div className= "dashborad average__container-tasks">
          <p className= "tasks-number">{this.props.averageTask}</p>
          <p className= "tasks-text">Tareas/dia/persona</p>
        </div>
      </div>
    );
  }
}

export default TeamStatusBar;
