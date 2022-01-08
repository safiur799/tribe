import React from "react";
import "./Display.css";
function DisplayComponent({ data1 }) {
  return (
    <div className="container">
      {data1.map((el) => {
        return (
          <div className="card_container">
            <p>{el.title}</p>
            <p>{el.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayComponent;
