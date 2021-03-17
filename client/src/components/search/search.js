import React, { Component } from 'react';
import SearchMusic from "./SearchMusic";
import './search.scss';

export default class Search extends Component 
{
    constructor(props) {
        super(props);

        this.state = {
            musicResults: []
        }
    }

    render()
    {
        return (
            <div className="search">
                <SearchMusic searchQuery={this.props.searchQuery}/>
            </div>
        );
    }
}