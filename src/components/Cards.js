import React from "react";

import Project from "./Project";
import Skill from "./Skill";

import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">

        <div className="cards__wrapper">
          <h1 id="skills">Skills</h1>
        </div>

        <div className="cards__wrapper">
              <Skill
                text="Java"
              />
              <Skill
                text="C++"
              />
              <Skill
                text="Web developement"
              />
              <Skill
                text="React"
              />
              <Skill
                text="Python"
              />
              <Skill
                text="Data science"
              />
              <Skill
                text="C#"
              />
              <Skill
                text="SQL"
              />
              <Skill
                text="Game developement"
              />
              <Skill
                text="Vue"
              />
              <Skill
                text="Tailwind"
              />

              <Skill
                text="SFML"
              />

              <Skill
                text="GCC"
              />

              <Skill
                text="Make"
              />

              <Skill
                text="Cmake"
              />
              <Skill
                text="R"
              />
        </div>

        <div className="cards__wrapper">
          <h1 id="projects">Projects</h1>
        </div>

        <div className="cards__wrapper"> 
              <Project 
                src="images/welcome.PNG"
                text="Made with react js"
                label="Website"
                path="https://github.com/joojoel/website"
              />
              <Project 
                src="images/ball.PNG"
                text="A simple physics simulation made with javafx"
                label="Javaball"
                path="https://github.com/joojoel/javaball"
              />
              <Project 
                src="images/vue.png"
                text="A digital task tracking platform"
                label="Taskimatti"
                path="https://github.com/taskimatti/taskimatti"
              />
              <Project 
                src="images/stick.PNG"
                text="A short puzzle game about moving boxes"
                label="Sticky boy"
                path="https://gamejolt.com/games/stickyboy/487009"
              />

              <Project 
                src="images/escape.PNG"
                text="Made in a few days during a game jam"
                label="VPE"
                path="https://gamejolt.com/games/vampireprisonescape/496867"
              />
        </div>
      </div>
    </div>
  )
}

export default Cards;