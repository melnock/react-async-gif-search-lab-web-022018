import React from 'react'
import GifList from '../components/GifList'
const URL_START="http://api.giphy.com/v1/gifs/search?q="
const URL_END = "&api_key=dc6zaTOxFJmzC"

class GifListContainer extends React.Component{

  fetchGifs = (props)=>{
    console.log("done")
    fetch(URL_START+ props.searchTerm +URL_END)
      .then(r=>r.json())
      .then(json=> this.props.handleFetch(json))
  }

  componentDidMount(){
    this.fetchGifs(this.props)
  }

  componentWillReceiveProps(newProps){
    console.log(this.props.searchTerm !== newProps.searchTerm)
    if(this.props.searchTerm !== newProps.searchTerm){
      this.fetchGifs(newProps)
    }
  }

  render(){
    return(
      <div>
        <GifList gifs={this.props.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
