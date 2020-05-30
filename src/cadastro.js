import React, {useState} from 'react';
import './App.css';

function Cadastro () {
    const [email, setEmail] = useState(''),
    [senha, setSenha] = useState('');
    function handleSubmit(event){
      event.preventDefault();
      alert("Seu email: "+email+"\nSua senha: "+senha );
      
    }
    return (
      <div>
        <div id="login">
        <h2 id="titulo">
          CADASTRO:
        </h2>  
        <form
        id="formulario"
        method="POST"
        autoComplete="off"
        placeholder="Digite seu email"
        >
          <input class="input"
          type="email"
          name="email"
          className="inputText"
          value={email}
          onChange={event => setEmail(event.target.value)}
          />
          <br/>
          <input
          type="password"
          name="senha"
          className="inputText"
          placeholder="Digite sua senha"
          value={senha}
          onChange={event => setSenha(event.target.value)}
          />
          <input
          type="submit"
          className="inputButton"
          value="Enviar"
          />
        </form> 
      
      </div>  
      </div>  
    
    );
  }
  
  export default Cadastro;

  