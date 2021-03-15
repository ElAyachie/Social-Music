import { useState } from 'react'

const SearchMusic = ({ onSearch }) => {
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
      <input type='submit' value='Search Music' className='btn btn-block' />
    </form>
  )
}

export default SearchMusic