import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img alt='gifs' src={props.url}/>
  </li>
);

export default Gif;