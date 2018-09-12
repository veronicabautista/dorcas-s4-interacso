import React from 'react';

class MemberPhotosBar extends React.Component {
  render(){
    return (
      <div className= "team_member_photo">
        {this.props.memberPics.map((pic) =>
        <img src= {pic}/>
      )}
      </div>
      );
  }
}

export default MemberPhotosBar;
