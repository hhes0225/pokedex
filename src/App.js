import './App.css';
import UpperBanner from './UpperBanner';
import ContentHome from './ContentHome';
import PokemonDetail from './PokemonDetail';
import React, {useEffect, useState} from 'react';
import { RouterProvider, createHashRouter, Outlet } from 'react-router-dom';

function App() {
  // console.log("App")
  const [mode, setMode] = useState('HOME')
  const setAbout=()=>{setMode('ABOUT')}
  const setHome=()=>{setMode('HOME')}

  const [pokemonData, setPokemonData] = useState([])
  let [pokemonEach, setPokemonEach] = useState([])
  //const [pokemonType, setPokemonType]=useState([])
  const [offset, setOffset] = useState(0)
  const limit=20
  const [total, setTotal]=useState(0)

  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'
  // useEffect(()=>{
  //   fetch(initialUrl+`?offset=${offset}&limit=${limit}`)
  //     .then((response)=>response.json())
  //     .then((response)=>{setPokemonData(response.results)
  //     setTotal(response.count)
  //     })
  //     .catch((error)=>console.log("error: ", error));
    
    
  // }, [offset])
      //[offset] 바뀔 때마다 useEffect 실행
  
  // console.log(eachPokemon)


  useEffect(()=>{
    async function fetchData(){
      let response=await getAllPokemon(initialUrl+`?offset=${offset}&limit=${limit}`);
      setPokemonData(response.results)
      setTotal(response.count)
      let pokemon = await loadingPokemon(response.results);
      //console.log(pokemon);
    }

    fetchData()
  }, [offset])
  
  const loadingPokemon=async(data)=>{
    let _pokemon=await Promise.all(data.map(async pokemon=>{
      let pokemonRecord=await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonEach(_pokemon)
  }

  //console.log(total)

  const propsToPass = {
    pokemonEach: pokemonEach,
    offsetObj: { offset: offset, setOffset: setOffset },
    limit: limit,
    total: total,
  };

  return (
    <div className="App">
      {/* console.log(propsToPass) */}
      <UpperBanner mode = {mode} setMode={[setAbout, setHome]} setOffset={setOffset}></UpperBanner>
      <Outlet context={propsToPass} />
      {/* <ContentHome mode = {mode} 
          pokemonEach={pokemonEach}
          offsetObj={{offset:offset, setOffset:setOffset}}
          limit={limit} total={total}></ContentHome> */}
    </div>

    
  );
}

export default App;

async function getAllPokemon(url){
  return new Promise((resolve, reject)=>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>{resolve(data)})
  })
}

async function getPokemon(url){
  return new Promise((resolve, reject)=>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>{resolve(data)})
  })
}


