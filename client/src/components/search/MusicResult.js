import "./musicResult.scss";
import AddIcon from "../../assets/add.svg";

const MusicResult = ({ musicResult }) => {
    return (
      <div class="card result">
          <div class="card-body">
              {/* <h5 class="card-title header">{musicResult.artist.name}</h5>
              <p class="card-text description">{musicResult.title}</p> */}
              {/* <img className="picture" src={} height="60px" width="60px" /> */}
              <h5 class="card-title header">Eminem</h5>
              <p class="card-text description">Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Fusce sed dui sit amet nisl consectetur maximus in interdum ex.
               Integer tristique lorem neque, eget mattis justo imperdiet at...</p>
              <img className="add-icon" src={AddIcon} height="40px" width="40px" />
          </div>
      </div>
    )
  }
  
  export default MusicResult;