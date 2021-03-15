const MusicResult = ({ musicResult }) => {
    return (
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">{musicResult.artist.name}</h5>
              <p class="card-text">{musicResult.title}</p>
          </div>
      </div>
    )
  }
  
  export default MusicResult;