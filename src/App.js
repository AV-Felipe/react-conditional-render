import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {

  const [characters, setCharacters] = useState("");


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
      </header>
      
      <main>
        <ul>
          {characters.length > 0 ?
            characters.map((item, index)=>{
              return <Card url={item} key={index} />
            }): <p>Nada aqui</p>
          }
        </ul>

      </main>

    </article>
  );

}

export default App;
