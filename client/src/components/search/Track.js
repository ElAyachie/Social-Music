import AddIcon from "../../assets/add.svg";

const Track = ({ musicResult }) => {
    return (
      <div className="card result">
          <div className="card-body">
              <img src={musicResult.album.cover} alt={musicResult.artist.name} />
              <br />
              <h5 className="card-title header">{musicResult.artist.name} - {musicResult.title}</h5>
              <img className="add-icon" src={AddIcon} height="50px" width="50px" alt="add-icon"/>
              <audio className="audio" controls>
                  <source src={musicResult.preview} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
              </audio>
          </div>
      </div>
    );
}
  
export default Track;