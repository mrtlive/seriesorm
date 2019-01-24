import React from 'react'




const Suggestions = (props) => {
  const content = props.results.map(movie =>
<li>
 <h3>Film İsmi: {movie.title}</h3>
 <img style= {{width:'100', height:'175px'}} src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt="logo" />
</li>
  );
  return <ul>{content}</ul>
}

export default Suggestions
