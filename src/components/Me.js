import React from 'react'

class Me extends React.Component{
  render(){
    return (
    <div>
      <h1 className="name-heading">{this.props.name}</h1>
      <img src="images\ralph-wave.gif"/>
    </div>
  );
  }
}


export default Me;
