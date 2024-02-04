import React from "react";

import Project from "./Project";
import Skill from "./Skill";

import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">

      <h1 id="skills">Skills</h1>

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

        <h1 id="projects">Projects</h1>

        <div className="cards__wrapper"> 
              <Project 
                src="images/img-1.jpg"
                text="Made with react js"
                label="Website"
                path="/"
              />
              <Project 
                src="images/img-3.jpg"
                text="A simple physics simulation made with javafx"
                label="Javaball"
                path="/"
              />
              <Project 
                src="images/img-4.jpg"
                text="A digital task tracking platform"
                label="Taskimatti"
                path="/"
              />
              <Project 
                src="images/img-6.jpg"
                text="A short puzzle game about moving boxes"
                label="Sticky boy"
                path="/"
              />

              <Project 
                src="images/img-7.jpg"
                text="Made in a few days during a game jam"
                label="VPE"
                path="/"
              />
        </div>

      </div>
    </div>
  )
}

export default Cards;