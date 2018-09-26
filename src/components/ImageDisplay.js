import React from "react"

class ImageDisplay extends React.Component{
  constructor(){
    super();
  }

  render(){
    const style = { border: `5px solid ${this.props.colour}`}
    return (
      <div>
       <img style={style} src={this.props.imageURL} />
      </div>
    )
  }
}

export default ImageDisplay;
