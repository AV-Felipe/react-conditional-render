import React, {useEffect, useState} from "react";
import "./CardList.css";
import Card from "./card";

function CardList({addressArray}){
    return (
        <ul className="listContainer">
            {addressArray.map((item, index)=>{
              return <Card url={item} key={index} />
            })}
        </ul>

    )
}

export default CardList