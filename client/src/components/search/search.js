import React, { Component } from 'react';
import SearchMusic1 from "./SearchMusic1";

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
            <div>
                <SearchMusic1 />
            </div>
        );
    }
}