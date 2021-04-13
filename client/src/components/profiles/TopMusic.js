import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import "./profiles.scss";

import Artists from "./Artists";
import UserTracks from "./UserTracks"

//import musicData from './musicData.js';

function TopMusic() {

    return (
        <div className="music-section">
            <Tabs defaultActiveKey="Artists" id="uncontrolled-tab-example">
                <Tab eventKey="Artists" title="Artists">
                    <div className="artists sub-sections list">
                        {/* <Artists /> */}
                    </div>         
                </Tab>
                <Tab eventKey="Tracks" title="Tracks">
                    <div className="user-tracks sub-sections">
                        <UserTracks />
                        <UserTracks />
                        <UserTracks />
                        <UserTracks />
                    </div>
                </Tab>
                <Tab eventKey="Albums" title="Albums">
                    <div className="albums sub-sections">
                        {/* <Albums /> */}
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

TopMusic.propTypes = {
    artistImg: PropTypes.string,
    postText: PropTypes.string
}

export default TopMusic;