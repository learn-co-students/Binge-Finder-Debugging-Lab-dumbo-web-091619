import React from 'react';

const Episode = (props) => {
  // debugger
  let myEpisode = props.eachEpisode
  return (  <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  )
}

export default Episode;
