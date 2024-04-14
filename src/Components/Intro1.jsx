import React from "react";
import Gif from "../Images/content/feature-1.png";

function Intro1() {
    return (
        <div className="intro1">
            <div className="intro1-text">
                <h1>Enjoy on your TV</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div> 
            <div className="intro1-gif">
                <img src={Gif} alt="TV GIF"/>
            </div>
        </div>
    );
}

export default Intro1;