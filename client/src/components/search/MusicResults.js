import MusicResult from './MusicResult'
import "./musicResults.scss";

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