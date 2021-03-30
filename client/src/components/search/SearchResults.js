import Track from './Track'
import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

const SearchResults = ({ musicResults }) => {
  // const [showTracks, setShowTracks] = useState(false);

  // function loadTracks() {
  //   setShowTracks(!showTracks);
  // }



  return (
    <div className="results">
      {musicResults.map((musicResult) => (
        <Track musicResult={musicResult} />
      ))}
    </div>
    );
};

export default SearchResults;