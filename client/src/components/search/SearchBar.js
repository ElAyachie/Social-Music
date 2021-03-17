import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();
      if (text !== '') {
          onSearch({ text });
          setText('');
      }
      else {
          alert("Please enter a valid search.");
      }
    }

    return (
      <form onSubmit={onSubmit}>
        <div>
          <label>Search</label>
          <input
            type='text'
            placeholder='search music'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    );
}

export default SearchBar;