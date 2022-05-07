import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import CardList from './components/CardList';
import PageLayout from './components/hoc/PageLayout';

function App() {

  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);


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

  return (
    <article>
      <header>
        <input type="text" ref={episodeInput} placeholder="digite um episódio" />
        <button type="button" onClick={handleSearch}>procurar</button>
        <button type="button" onClick={()=>setCount(count+1)}>contar</button>
      </header>
      
      <main>
        <p>{count}</p>

        <CardList addressArray={characters} />

      </main>

    </article>
  );

}

export default App;
