import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

const Favoritos = (props) => {
    const [pokemons, setPokemon] = useState([]);
    console.log(props.match.params.name)
    useEffect(() => {
        axios.get(`https://pokedex20201.herokuapp.com/users/${props.match.params.name}`)
            .then ((res)=>{
                setPokemon(res.data.pokemons);
                console.log(res.data.pokemons)
            } )
    }, [] )


    let history = useHistory()
    const Deletar = (name) => {
        const user = JSON.parse(localStorage.getItem('app-token'))
        axios.delete(`https://pokedex20201.herokuapp.com/users/${user}/starred/${name}`)
            .then( () => {
                let username = JSON.parse(localStorage.getItem('app-token'))
                history.push({pathname:`/favoritos/${username}`, state:{name}})
            })
            .catch((error) => {
                console.log(error)
            })  

    }
   return(

        <div>
             { (pokemons!==[])&&
                pokemons.map((elemento) => (
                    <div className ="pokemon" key={elemento.id} onClick = {() => history.push(`/pokemon/${elemento.name}`)} >
                        {elemento.name} 
                        <img id ="pokemon" alt ={"pokemon"} src= {elemento.image_url }/>
                        <button className="Form-Btn" onClick= {() => Deletar(elemento.name)}>Deletar</button>
                    </div>                
                ))
            }
                
        </div>
   ) 
     
}
export default Favoritos;
