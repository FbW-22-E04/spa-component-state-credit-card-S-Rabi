import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="container">
      <header className="bank">
        <h1> {props.cardInfo.bank} </h1>
      </header>
      <div className="num">{props.cardInfo.num}</div>
      <p className="pin">1994</p>
      <div className="expiry">
        <span>
          VALID <br /> THRU
        </span>
        <p>{props.cardInfo.expiry}</p>
      </div>
      <div className="cardholder">
        <h3>{props.cardInfo.cardholder}</h3>
      </div>
    </div>
  );
}

export default Card;
