import MusicResult from './MusicResult'

const MusicResults = ({ musicResults }) => {
  return (
    <div>
      {musicResults.map((musicResult) => (
        <MusicResult musicResult={musicResult} />
      ))}
    </div>
    )
};

export default MusicResults;