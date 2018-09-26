import React from "react"


class Movie extends React.Component{

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    alert(this.props.film.title);
  }

  render(){
    return (
      <div onClick={this.handleClick} >
        <h3>{this.props.film.title}</h3>
        <li>Year: {this.props.film.year}</li>
      </div>
    )
  }
}

export default Movie;
