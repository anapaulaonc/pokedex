import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

const Pokemon = () =>{
    let {name} = useParams()
    const [pokemons, setPokemon] = useState([]);
    useEffect(() => { 
        axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
        .then(res => {
        setPokemon(res.data);
        })
    },[])
    let history = useHistory() 
    const favoritar = () => {
        const user = JSON.parse(localStorage.getItem('app-token'))
        axios.post(`https://pokedex20201.herokuapp.com/users/${user}/starred/${name}`)
            .then( () => {
                history.push(`/favoritos`)
            })
            .catch((error) => {
                console.log(error)
            })  

    }
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
                       <button className="Form-Btn" onClick= {favoritar}>Favoritar</button>
                    </div>                      
            }
       </div>
       </>
    )
}

export default Pokemon;