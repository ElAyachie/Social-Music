import React from 'react'
import { useState } from 'react'
import MusicResults from './MusicResults';
import SearchMusic from './SearchMusic';
import "./searchMusic1.scss";

const SearchMusic1 = () => {
  const [musicResults, setMusicResults] = useState([]);
  
  // General api fetch for music
  // Input: Artist, song, albums, ect.
  // Output: Populates the music results array and displays it to the user
  const searchMusic =  (search) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search.text, {
      "method": "GET",
      "headers": {  
        "x-rapidapi-key": "97a20bbb62msh20836b7c69aca3fp1cffb7jsna99232be6519",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data =>  {
      console.log(data.data);
      setMusicResults({musicResults: data.data});
    })
    .catch(error => {
      console.error(error);
    });
  } 

    return (
      <div className="results-section">
        {console.log(musicResults.musicResults)}
        {/* {console.log(musicResults.musicResults.length)} */}
        <SearchMusic onSearch={searchMusic} />
        {/* {musicResults.musicResults.length > 0 ? (
          <MusicResults musicResults={musicResults.musicResults} />
              ) : ('No results to show')} */}

        <MusicResults musicResults={musicResults.musicResults} />
              
      </div>
    )
}

export default SearchMusic1;