import React from "react";
import Gif from "../Images/content/feature-3.png";

function Intro1() {
    return (
        <div className="intro3">
            <div className="intro3-text">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="intro3-gif">
                <img src={Gif} alt="TV GIF"/>
            </div>
        </div> 
    );
}

export default Intro1;