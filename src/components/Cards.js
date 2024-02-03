import React from "react";

import CardItem from "./CardItem";
import CardGrid from './CardGrid';

import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <h1>My skills:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <CardGrid>
              { Array(100).fill().map((_, i) => (
                  <CardItem 
                    key={i}
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="lololotrollolol"
                    path="/services"
                  />
                ))
              }
            </CardGrid>
        </div>
      </div>
    </div>
  )
}

export default Cards;