import React from "React";
import cx from "classnames"

class CreditCardInput extends React.Component{
  constructor(){
    super()

    this.state = {text: ""}


    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event){
    event.preventDefault()
    this.setState({
      text: event.target.value
    })


  }


  render(){
    let containsNonNumeric = isNaN(this.state.text)
    let tooLong = this.state.text.length > 16
    let correctInput = this.state.text.length === 16 && !containsNonNumeric

    const classes = cx({
      "border--incorrect-input": tooLong || containsNonNumeric,
      "border--correct-input": correctInput
    })

    return (
      <form>
        <input className={classes} onChange={this.handleChange} type="text" />
        <p>{tooLong || containsNonNumeric ? "Incorrect Input" : ""}</p>
        <p>{correctInput ? "Correct Input" : ""}</p>
      </form>
    )

  }

}


export default CreditCardInput
