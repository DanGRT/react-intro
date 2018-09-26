import React from 'react';
import FormInput from './FormInput';

class RegistrationForm extends React.Component {
  constructor(){
    super()

    this.state = {
      firstName: "",
      secondName: "",
      email: ""
    }

    this.submitHandler = this.submitHandler.bind(this)

  }

 receiveText () {
   
 }

  submitHandler(event){
    event.preventDefault()
    console.log(`Your name is ${this.state.firstName} ${this.state.secondName} email: ${this.state.email}`)
  }

  render(){

    return (
      <form onSubmit={this.submitHandler}>
        <FormInput receiveText={this.receiveText} id="firstName"/>
        <FormInput receiveText={this.receiveText} id="secondName"/>
        <FormInput receiveText={this.receiveText} id="email"/>
        <input type="submit" />
      </form>
    )
  }

}

export default RegistrationForm;
