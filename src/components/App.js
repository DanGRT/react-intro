import React from 'react';
import ImageSearchAndResults from "./ImageSearchAndResults.js"


class App extends React.Component{

  render(){
    return (
      <div>
        <h1 className="main-heading">React photo gallery</h1>
        <ImageSearchAndResults />
      </div>
    );
  }
}

export default App;
