import Track from './Track'
import React from "react"
//import { CSSTransition } from "react-transition-group"

const SearchResults = ({ musicResults }) => {
  // const [showTracks, setShowTracks] = useState(false);

  // function loadTracks() {
  //   setShowTracks(!showTracks);
  // }

  return (
    <div className="results">
      {
        musicResults.map((musicResult, index) => (
          <Track key={index} musicResult={musicResult} />
        ))
      }
    </div>
    );
};

export default SearchResults;