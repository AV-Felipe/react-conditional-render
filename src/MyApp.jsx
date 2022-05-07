import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import CardList from './components/CardList';
import PageLayout from './components/hoc/PageLayout';
import SearchElement from './components/SearchElement';

function MyApp() {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        // console.log(episodeInput.current.value)
        fetch(`https://rickandmortyapi.com/api/episode/1`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacters(data.characters);
    
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    let episodeInput = React.createRef();

    function handleSearch(e){
        console.log(episodeInput.current.value)
        fetch(`https://rickandmortyapi.com/api/episode/${episodeInput.current.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacters(data.characters);
    
        })
        .catch(error => {
            console.log(error);
        })
      }


    return(
        <PageLayout main={<CardList addressArray={characters} />} header={<SearchElement onClickSearch={handleSearch} inputRef={episodeInput} />} />

    )

}

export default MyApp;