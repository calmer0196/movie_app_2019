import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedomto say that two plus two make four. If that i granted, all else follows."
            </span>
            <span>George Orwell, 1984</span>
        </div>
    );
}

export default About;