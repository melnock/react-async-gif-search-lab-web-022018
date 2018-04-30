import React from'react'

const GifSearch = (props)=>{

  return(
    <form onSubmit={props.handleSubmit} >
      <input onChange={props.handleChange} value={props.searchTerm}/>
      <input type="submit" />
    </form>
  )
}

export default GifSearch
