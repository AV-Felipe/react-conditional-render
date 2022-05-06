import React, {useEffect, useState} from "react";
import './card.css';

function Card (props) {

    const [character, setCharacter] = useState("");

    useEffect(()=>{
        const url = `${props.url}`;

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
        <ul className={"mainCard " + character.status} key={props.keyvalue}>
            <li className="imageHolder">
                <img src={character.image} />
            </li>

            <li>

                <ul className="textArea">

                    <li className="nameText">
                        {character.name}
                    </li>

                    <li className="speciesText">
                        {character.species}
                    </li>

                </ul>

            </li>

        </ul>
    )
}

export default Card;