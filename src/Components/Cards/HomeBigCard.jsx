import React from "react";
import "./HomeBigCard.css"

function HomeBigCard({ Image, HeadText, Text }) {
  return (
    <div className="bigcard">
      <img width="80%" src={Image} alt="" />
      <div style={{maxWidth:"50%"}} >
        <p style={{fontWeight:"500"}} >{HeadText}</p>
        <p style={{fontSize:"10px"}} >{Text}</p>
      </div>
    </div>
  );
}

export default HomeBigCard;
