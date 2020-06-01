import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './pokemon.js'
import { Route, useHistory } from 'react-router-dom'
import "./map.css"

const Api = () => {
    const [pokemons, setPokemon] = useState([]);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    useEffect(() => {
        axios.get('https://pokedex20201.herokuapp.com/pokemons')
            .then(res => {
                setPokemon(res.data.data);
                setPrevPage(res.data.prevPage);
                setNextPage(res.data.nextPage);
                console.log(res.data);
            })
    }, [])
    let history = useHistory()
    return ( <
        >

        <
        div className = "box-container" > {
            (pokemons !== []) &&
            pokemons.map((elemento) => (

                <
                div className = "pokemon"
                key = { elemento.id }
                className = "pokemon"
                onClick = {
                    () => history.push(`/pokemon/${elemento.name}`) } >

                { elemento.name } <
                img className = "pokemon-size"
                id = "pokemon"
                alt = { "pokemon" }
                src = { elemento.image_url }
                /> <
                /div>                
            ))
        }

        <
        /div>  <
        div className = "button-size" >
        <
        button className = "button-previous"
        onClick = {
            () => prevPage } > voltar < /button> <
        button className = "button-previous"
        onClick = {
            () => nextPage } > avançar < /button> <
        /div> <
        />      
    )
}
export default Api;