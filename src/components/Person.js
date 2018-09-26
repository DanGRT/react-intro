import React from "react"


class Person extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {formValue: ""}

  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      formValue: event.target.value})

  }



  render(){
    return (
      <div namedata={this.state.formValue}>
        <p>{this.state.formValue}</p>
        <form>
          <input onChange={this.handleChange} type="text"/>
        </form>


      </div>
    )
  }
}

export default Person;
