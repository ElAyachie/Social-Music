import React, { useState } from 'react'
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

function SearchMusic() {
  const [musicResults, setSearchResults] = useState([]);

  // General api fetch for music
  // Input: Artist, song, albums, ect.
  // Output: Populates the music results array and displays it to the user
  const searchMusic = (search) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search.text, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "2269dea1a3msha88d9bf6b6f0a40p19ba1cjsn31b64c781ad0",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data =>  {
      console.log(data.data);
      setSearchResults({
        musicResults: data.data
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <div>
      {console.log(musicResults)}
      <SearchBar onSearch={searchMusic} />
      {((musicResults.musicResults !== undefined) || (musicResults.musicResults != null)) ? (<SearchResults musicResults={musicResults.musicResults} />) : ('No results to show')}
    </div>
  )
}

export default SearchMusic;