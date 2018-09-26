import React from 'react'

class FormInput extends React.Component {

  render () {
    return (
      <div>
        <label htmlFor={this.props.id} />
        <input type="text" id={this.props.id}/>
      </div>
    )
  }

}

export default FormInput
