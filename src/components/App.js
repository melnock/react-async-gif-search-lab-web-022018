import React from 'react'

import NavBar from './NavBar'
import GifSearch from './GifSearch'
import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component

class App extends React.Component {

  state={
    gifs: [],
    searchTerm: "",
    ifSubmitted: false,
    submittedSearchTerm: "",
  }

  handleFetch=(json)=>{
    this.setState({
      gifs: [json.data[0], json.data[3], json.data[2]],
    })
  }

  handleChange=(e)=>{
    const fixedSearch = this.formatSearchTerm(e.target.value)
    this.setState({
      searchTerm: fixedSearch,
    })
  }
  formatSearchTerm = (term)=>{
    return term.replace(/\s/, "-")
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      ifSubmitted: true,
      submittedSearchTerm: this.state.searchTerm,
    })
  }

  render(){
    console.log(this.state.submittedSearchTerm)
    console.log(this.state.gifs)
    return (
      <div className="App">
          < NavBar color='black' title="Giphy Search" />
          < GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          {this.state.ifSubmitted ? < GifListContainer handleFetch={this.handleFetch} searchTerm={this.state.submittedSearchTerm} gifs={this.state.gifs}/> : null}
      </div>
    )
  }
}

export default App
