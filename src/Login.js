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
    )
}

export default Login