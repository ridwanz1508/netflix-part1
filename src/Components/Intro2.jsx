import React from "react";
import Gif from "../Images/content/feature-2.png";

function Intro1() {
    return (
        <div className="intro2">
            <div className="intro1-gif">
                <img src={Gif} alt="TV GIF"/>
            </div>
            <div className="intro2-text">
                <h1>Download your shows to watch offline</h1>
                <p>Save your favorites easily and always have something to watch.</p>
            </div> 
        </div>
    );
}

export default Intro1;