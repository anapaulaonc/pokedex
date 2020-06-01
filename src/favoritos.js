import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';


const Favoritos = () => {
    useEffect(() => { 
        axios.get(`https://pokedex20201.herokuapp.com/users/${user}/starred/${name}`)
        .then(res => {
        setPokemon(res.data);
        })
    },[])

   return(
        <div>
           <div className ="pokemon" key={elemento.id} onClick = {() => history.push(`/pokemon/${elemento.name}`)} >
                        {elemento.name} 
                        <img id ="pokemon" alt ={"pokemon"} src= {elemento.image_url }/>
            </div>  

        </div>
   ) 
     
}
export default Favoritos;
