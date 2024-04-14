import React from "react";
import Gif from "../Images/content/feature-4.png";

function Intro1() {
    return (
        <div className="intro4">
            <div className="intro4-gif">
                <img src={Gif} alt="TV GIF"/>
            </div>
            <div className="intro4-text">
                <h1>Create profiles for kids</h1>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </div> 
    );
}

export default Intro1;