import React, {useState, useRef} from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import "./login.css";
import {useHistory} from 'react-router-dom';


const Login = () => {
    const input = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input.current.value)
        if(input.current.value==="")return
        axios.get(`https://pokedex20201.herokuapp.com/users/${input.current.value}`)
            .then ( () => {
                    localStorage.setItem('app-token', JSON.stringify(input.current.value))
                    history.push('/pokedex')
            })    
        .catch((error) => {
            console.log(error)
            alert(` O usuário: "${input.current.value}" não cadastrado. Clique em Cadastre-se!`)
        })    
    }
    let history = useHistory() 
    return(
        <div>
        
            <div className= "box-container">
              
                <form className="Form" onSubmit={handleSubmit}>
                <h1 className="Login-title">
                    login
                </h1>
                    <div className="Form-Group">
                        <input type="text"
                            ref={input}
                            name="username"
                            className="Form-Field"
                        />
                    </div>     
                    <button className="Form-Btn" type="submit"> Login </button>
                    <button className="Form-Btn" onClick= {() => history.push(`/cadastro`)}>Cadastre-se</button>
                </form>

            </div>
        
        </div>
    )
}

export default Login