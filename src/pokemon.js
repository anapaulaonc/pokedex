import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Pokemon = () =>{
    let {name} = useParams()
    const [pokemons, setPokemon] = useState([]);
    useEffect(() => { 
        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
        .then(res => {
        setPokemon(res.data);
        })
    },[])
    return (
        <>
        <button onClick= {() => window.history.back()}>voltar</button>
        
       <div>
           { (pokemons!==[])&&
                    <div className ="pokemon" key={pokemons.id} >
                        <h3>{pokemons.name}</h3> 
                        <img id ="pokemon" alt ={"pokemon"} src= {pokemons.image_url }/>
                       <p className = "weight"> peso: {pokemons.weight} kg </p>  
                       <p className ="height"> altura: {pokemons.height} cm </p> 
                       <p className= "kind"> tipo: {pokemons.kind} </p> 
                    </div>                
            }
       </div>
       </>
    )
}

export default Pokemon;