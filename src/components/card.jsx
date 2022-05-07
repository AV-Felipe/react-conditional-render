import React, {useEffect, useState} from "react";
import './card.css';

function Card ({url}) {

    const [character, setCharacter] = useState("");

    useEffect(()=>{

        fetch(`${url}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacter({
                image: data.image,
                name: data.name,
                species: data.species,
                status: data.status
            });
        })
        .catch(error => {
            console.log(error);
        })

    },[]);

    return (
        <li className={"mainCard " + character.status}>
            <div className="imageHolder">
                <img src={character.image} />
            </div>

            <div className="textArea">

                <h2 className="nameText">
                    {character.name}
                </h2>

                <p className="speciesText">
                    {character.species}
                </p>

            </div>

        </li>
    )
}

export default Card;