import React from "react";

function Skill(props) {
  return (
    <>
      <li className="skill_item">
          <h5 className="skill_item_text">{props.text}</h5>
      </li>
    </>
  )
}

export default Skill