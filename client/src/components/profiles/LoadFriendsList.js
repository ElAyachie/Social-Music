import api from '../../config/api';
import axios from 'axios';

function LoadFriendsList() {
    const user = JSON.parse(localStorage.getItem("user"));
    const userID = user.UserID;

    const getFriends  = async e  =>  {
        await axios.get(api.base_url + '/users/friends/get', {
                params: {
                    UserID: userID
                }
            })
            .then(function(response) {
                console.log(response.data);
                if (response.data.code === 200) {
                    let dataObject = {};
                    let friendsList = [];
                    for(var i = 0; i < response.data.friends.length; i++) {
                        dataObject = {
                            UserID: response.data.friends[i].UserID,
                            Username: response.data.friends[i].Username,
                        };
                        friendsList.push(dataObject);
                    }
                    console.log("User data recieved");
                    localStorage.setItem("friends", JSON.stringify(friendsList));
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    const getUsers  = async e  =>  {
        await axios.get(api.base_url + '/users/get')
            .then(function(response) {
                if (response.data.code === 200) {
                    console.log(response);
                    let dataObject = {};
                    let usersList = [];
                    for(var i = 0; i < response.data.users.length; i++) {
                        dataObject = {
                            UserID: response.data.users[i].UserID,
                            Username: response.data.users[i].Username,
                        };
                        usersList.push(dataObject);
                    }
                    console.log("User data recieved");
                    localStorage.setItem("users", JSON.stringify(usersList));
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    localStorage.setItem("friends", JSON.stringify([]));
    localStorage.setItem("users", JSON.stringify([]));
    getFriends();   
    getUsers();
}

export default LoadFriendsList;