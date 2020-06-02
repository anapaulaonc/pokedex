import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './pokemon.js'
import {Route, useHistory} from 'react-router-dom';
import "./map.css";

const Api = () => {
    const [pokemons, setPokemon] = useState([]);
    const [prevPage, setPrevPage] = useState({});
    const [nextPage, setNextPage] = useState({});
    const loadData = (page=1) => {
        axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
        .then(res => {
        setPokemon(res.data.data);
        setPrevPage(res.data.prev_page);
        setNextPage(res.data.next_page);
        console.log(res.data.next_page);
        
        })
    }
    useEffect(() => {
        loadData()
    },[])

    let history = useHistory() 

    const navigation = (page) => {
           if(page===null)return
           loadData(page)
           console.log(nextPage);
    }
    

    return(
        <div className="pokemonContainer">
            { (pokemons!==[])&&
                pokemons.map((elemento) => (
                    <div className ="pokemon" key={elemento.id} onClick = {() => history.push(`/pokemon/${elemento.name}`)} >
                        {elemento.name} 
                        <img id ="pokemon" alt ={"pokemon"} src= {elemento.image_url }/>
                    </div>                
                ))
            }
            <button className="button-page" onClick={() => navigation(prevPage)}>voltar</button>
            <button className="button-page" onClick={() => navigation(nextPage)}>avançar</button>
        </div>        
    )
}
export default Api;