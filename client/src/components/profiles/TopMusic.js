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
                    <div className="list">
                        <Artists />
                        <Artists />
                        <Artists />
                        <Artists />
                        <Artists />
                    </div>         
                </Tab>
                <Tab eventKey="Tracks" title="Tracks">
                    <UserTracks />
                    <UserTracks />
                    <UserTracks />
                    <UserTracks />
                </Tab>
                <Tab eventKey="Albums" title="Albums">
                    {/* <Albums /> */}
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