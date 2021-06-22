import React, { useEffect, useState,useRef} from 'react';
import { getAllPokemon, getPokemon } from './components/pokemon'
import './App.css';
import Card from './components/card/card'
import Filter from './components/filter/filter';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [items, setItems] = useState([]);
  const [urle, setUrle] = useState();
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=48&offset=200';
  const [filter, setFilter] = useState([]);
 
  useEffect(() => {
      async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      let pokemon = await LoadingPoremon(response.results);
      setPrevUrl(response.previous)
      setNextUrl(response.next)
    }
    fetchData();
  },[])
  
 
  const LoadingPoremon = async (data) =>{
      let _pokemon = await Promise.all(data.map(async pokemon =>{
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))
    setPokemonData(_pokemon);
    handleClick();
  }

  const textInput = useRef();
  const addName = (event) => {
    event.target.style.background = 'pink';
    for (let i = 0; i < pokemonData.length; i++){
      let namess = pokemonData.name;
      console.log(namess)
      if(namess === textInput.current.value){
        alert('ads');
      }
    }
    
  };
  
  const handleClick = async () => {
    // setFilter(textInput.current.value)
    for (let i = 0; i < pokemonData.length; i++){
      console.log(pokemonData[i].name)
    }
  }
  return (
    <>
    <div>
      <input 
         type="text"
         ref={textInput}
         onFocus={addName}
         />
        <input
        type="button"
        value="Перенести фокус на текстове поле введення"
        onClick={handleClick}
      />
      </div>
    <div className="App">
      <div>
      {pokemonData.map((pokemon, i ) => ( 
      <Card key={i} pokemon={pokemon}/>
      ))}
      </div>
    </div>
    </>
  );
}

export default App;
