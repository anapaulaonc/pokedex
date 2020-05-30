import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Api = () => {
    const [pokemons, setPokemon] = useState([])
    useEffect(() => { 
        axios.get('https://pokedex20201.herokuapp.com/pokemons')
        .then(res => {setPokemon(res.data.data)})
    }, [])

    return(
        <div>
            { (pokemons!==[])&&
                pokemons.map((elemento) => (
                    <h2>
                        {elemento.name}
                    </h2>
                ))
            }
        </div>
    )
}
export default Api;