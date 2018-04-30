import React from'react'

const GifList = (props)=>{
  const renderGif = props.gifs.map((gif)=>{
    return (
      <li key={gif.id}>
        <img src={gif.images.downsized.url} alt={gif.slug} />
      </li>
    )
  })
  return(
    <ul>
      {renderGif}
    </ul>
  )
}

export default GifList
