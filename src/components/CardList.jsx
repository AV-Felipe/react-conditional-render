import React, {useEffect, useState} from "react";
import Card from "./card";

function CardList({addressArray}){
    return (
        <ul>
            {addressArray.map((item, index)=>{
              return <Card url={item} key={index} />
            })}
        </ul>

    )
}

export default CardList