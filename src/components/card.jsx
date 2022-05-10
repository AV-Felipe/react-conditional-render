import React, {useEffect, useState} from "react";
import styled from "styled-components";


const MainCardStyle = styled.li`
    box-sizing: border-box;
    width: 450px;
    height: 150px;
    padding: 0;
    margin: 2px;
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${props => {
        switch(props.className) {
            case 'Alive': 
                return 'green';
            case 'Dead':
                return 'red';
            case 'unknown':
                return 'grey';
        }

        }
    };
`;

const DeadBanner = styled.p`
    background-color: red;
    box-shadow: rgba(0, 0, 0, 0.70) 0px 0px 5px 90px;
    padding: 3px;
`;

const ImageHolder = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 150px;
    height: 150px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(${props => props.img});
`;

const TextArea = styled.div`
    list-style: none;
    padding: 3px;
`;

const CharacterName = styled.h2`
    font-size: 32px;
    font-weight: bold;
`;

const CharacterSpecies = styled.p`
    font-size: 16px;
`


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
        <MainCardStyle className={character.status}>
        
            <ImageHolder img={character.image}>
            {character.status === "Dead"? <DeadBanner>Morto</DeadBanner> : ""}
            </ImageHolder>

            <TextArea>

                <CharacterName>
                    {character.name}
                </CharacterName>

                <CharacterSpecies>
                    {character.species}
                </CharacterSpecies>

            </TextArea>

        
        </MainCardStyle>
    )
}

export default Card;