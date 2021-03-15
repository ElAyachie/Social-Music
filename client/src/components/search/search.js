import React, { Component } from 'react';
import "./search.scss";


export default class Search extends Component 
{
    constructor(props) {
        super(props);

        this.state = {
            musicResults: []
        }
    }

    async componentDidMount() {
        await axios.get("https://rapidapi.com/deezerdevs/api/deezer-1")
        .then(response => {
            this.setState({
                musicResults: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render()
    {
        return (
            <div>
            </div>
        );
    }
}