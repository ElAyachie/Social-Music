import api from '../../config/api';
import axios from 'axios';

export const LoadMusicInterests = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userID = loggedInUser.UserID;

    // All the get music interest functions below (might be better to move these somewhere else, but i dont want to make them static)
    const getAlbumInterests  = async e  =>  {
        await axios.get(api.base_url + '/users/load_albums/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    let dataObject = {};
                    const albumInterests = [];
                    for(var i = 0; i < response.data.albumInterests.length; i++) {
                        dataObject = {
                            AlbumName: response.data.albumInterests[i].AlbumName,
                            AlbumPic: response.data.albumInterests[i].AlbumPic,
                            ArtistName: response.data.albumInterests[i].ArtistName,
                            AlbumID: response.data.albumInterests[i].AlbumID,
                            ArtistID: response.data.albumInterests[i].ArtistID
                        };
                        albumInterests.push(dataObject);
                    }
                    console.log("Album data recieved");
                    localStorage.setItem("album_interests", JSON.stringify(albumInterests));
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    const getArtistInterests = async e => {
        await axios.get(api.base_url + '/users/load_artists/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                if (response.data.code === 200) {
                    let dataObject = {};
                    const artistInterests = [];
                    for(var i = 0; i < response.data.artistInterests.length; i++) {
                        dataObject = {
                            ArtistName: response.data.artistInterests[i].ArtistName,
                            ArtistPic: response.data.artistInterests[i].ArtistPic,
                            ArtistID: response.data.artistInterests[i].ArtistID
                        };
                        artistInterests.push(dataObject);
                    }
                    console.log("Artist data recieved");
                    localStorage.setItem("artist_interests", JSON.stringify(artistInterests));
                }
                 })
                .catch(function(error) {
                    console.log(error);
                });
        };

        const getSongInterests = async e => {
            await axios.get(api.base_url + '/users/load_songs/get', {
                    params: {
                        UserID: userID
                    }
                })
                .then(function(response) {
                    if (response.data.code === 200) {
                        let dataObject = {};
                        const songInterests = [];
                        for(var i = 0; i < response.data.songInterests.length; i++) {
                            dataObject = {
                                SongName: response.data.songInterests[i].SongName,
                                SongLink: response.data.songInterests[i].SongLink,
                                ArtistName: response.data.songInterests[i].ArtistName,
                                AlbumPic: response.data.songInterests[i].AlbumPic,
                                ArtistID: response.data.songInterests[i].ArtistID,
                                AlbumID: response.data.songInterests[i].AlbumID
                            };
                            songInterests.push(dataObject);
                        }
                        console.log("Song data recieved");
                        localStorage.setItem("song_interests", JSON.stringify(songInterests));
                    }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    localStorage.setItem("artist_interests", JSON.stringify([]));
    localStorage.setItem("song_interests", JSON.stringify([]));
    localStorage.setItem("album_interests", JSON.stringify([]));
    getArtistInterests();
    getSongInterests();
    getAlbumInterests();
}

export default LoadMusicInterests;