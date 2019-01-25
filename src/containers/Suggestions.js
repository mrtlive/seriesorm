import React from 'react'
import './suggestions.css';
import styled from 'styled-components'

const Suggestions = (props) => {
  const content = props.results.map(movie =>

<div className='listmovie'>
 <h3>{movie.title}</h3>
 <img style= {{width:'100', height:'175px'}} src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt="logo" /><br />
</div>
  );
  return <div className='showMovies'>{content}</div>
}

export default Suggestions
