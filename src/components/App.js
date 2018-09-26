import React from 'react';
import RegistrationForm from "./RegistrationForm.js"


class App extends React.Component{

  render(){
    return (
      <div>
        <h1 className="main-heading">React photo gallery</h1>
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
