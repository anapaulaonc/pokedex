import React, {useState, useRef} from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import "./login.css";
import {useHistory} from 'react-router-dom';

const Cadastro = () => {
  const input = useRef()
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(input)

      axios.post(`https://pokedex20201.herokuapp.com/users/${input}`)
          .then ( () => {
                  localStorage.setItem('app-token', JSON.stringify(input))
                  history.push('/pokedex')
          })    
      .catch((error) => {
          console.log(error)
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
              <button className="Form-Btn" type="submit"> Cadastrar </button>
          </form>
      
      </div>
  )
}
  
  export default Cadastro;

  