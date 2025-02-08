import React from "react";
import './TitleScreen.css';

const TitleScreen = ({onStart}) => {
    return(
        <div className="title-screen">
            <h1 className="title-text">Star Destroyer!!</h1>
            <img src="/starfield.jpg" alt="Starfield" className="title-image"/>
            <button className="start-button" onClick={onStart}>Start Game</button>
        </div>
    );
}

export default TitleScreen;