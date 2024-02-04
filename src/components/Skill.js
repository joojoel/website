import React from "react";

function Skill(props) {
  return (
    <>
      <li className="skill_item">
            <div className="skill_item_info">
              <h5 className="skill_item_text">{props.text}</h5>
            </div>
      </li>
    </>
  )
}

export default Skill