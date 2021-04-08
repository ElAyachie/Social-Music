import React, { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import "./profiles.scss";

import Artists from "./Artists";
import UserTracks from "./UserTracks";
import Albums from "./Albums";

function TopMusic() {
    return (
        <div className="music-section">
            <Tabs defaultActiveKey="Artists" id="uncontrolled-tab-example">
                <Tab eventKey="Artists" title="Artists">
                    <div className="sub-sections list">
                        <Artists />
                    </div>         
                </Tab>
                <Tab eventKey="Tracks" title="Tracks">
                    <div className="sub-sections">
                        <UserTracks />
                    </div>
                </Tab>
                <Tab eventKey="Album" title="Album">
                    <div className="sub-sections list">
                        <Albums />
                    </div>         
                </Tab>
            </Tabs>
        </div>
    )
}

export default TopMusic;