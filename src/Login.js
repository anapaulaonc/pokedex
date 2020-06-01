<<<<<<< HEAD
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
        
            <form className="Form" onSubmit={handleSubmit}>
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
=======
import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import "./login.css"


const Login = () => {
    const handleSubmit = values => {
        axios.post('https://pokedex20201.herokuapp.com/users/username', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
    return ( <
        div >
        <
        Formik initialValues = {
            {} }
        onSubmit = { handleSubmit }
        validationSchema = { validations } >
        <
        Form className = "Form" >
        <
        div className = "Form-Group" >
        <
        Field name = "email"
        className = "Form-Field" /
        >
        <
        ErrorMessage component = "span"
        name = "email"
        className = "Form-Error" /
        >
        <
        /div>      <
        div className = "Form-Group" >
        <
        Field name = "password"
        className = "Form-Field" /
        >
        <
        ErrorMessage component = "span"
        name = "password"
        className = "Form-Error" /
        >
        <
        /div> <
        button className = "Form-Btn"
        type = "submit" > Login < /button> <
        form method = "get"
        action = " http://localhost:3000/cadastro" > < button class = "btn"
        type = "submit" > Cadastre - se < /button></form >
        <
        /Form> <
        /Formik>

        <
        /div>
>>>>>>> 1389cfcfcfa71e17f310628b61bb3b54d25c3e04
    )
}

export default Login