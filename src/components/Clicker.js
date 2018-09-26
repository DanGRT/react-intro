import React from 'react';

class Clicker extends React.Component{
  constructor(){
    super()
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    }, () => alert(`Button clicked ${this.state.counter} times`))

  }


  render(){
    return (
      <div>

        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Clicker;
