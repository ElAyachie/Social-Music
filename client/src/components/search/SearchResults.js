import Track from './Track'

const SearchResults = ({ musicResults }) => {
  return (
    <div className="results">
      {
        musicResults.map((musicResult) => (
          <Track musicResult={musicResult} />
        ))
      }
    </div>
    );
};

export default SearchResults;