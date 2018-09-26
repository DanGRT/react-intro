// `https://api.unsplash.com/search/photos?page=1&query=${description}&client_id=233c522c9aa5098a5e08dae45ba3d60a6146624ee96b5a71a364e408bacd2b10`

import React from "react"
import ImageDisplay from "./ImageDisplay.js"
import cx from "classnames"

class ImageSearchAndResults extends React.Component{
  constructor(){
    super()
    this.state = {
      searchInput: "",
      imageArray: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const searchString = this.state.searchInput
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=233c522c9aa5098a5e08dae45ba3d60a6146624ee96b5a71a364e408bacd2b10`)
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        imageArray: body.results.map((image) => ({
          key: image.id,
          url: image.urls.regular,
          colour: image.color
        }))
      })
    })
  }

  handleInput(event){
    event.preventDefault()
    this.setState({
      searchInput: event.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text" />
          <input type="submit" />
        </form>

        <br />

        {this.state.imageArray.map(image => {
          return ( <ImageDisplay key={image.key} colour={image.colour} imageURL={image.url} />)
        })}
        
      </div>
    )
  }
}


export default ImageSearchAndResults
