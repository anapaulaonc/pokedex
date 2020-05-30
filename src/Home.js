import React, { Component } from "react";
import "./Home.css";
import Cadastro from './cadastro.js';
 
class Home extends Component{
    render(){
        return (
           <section className="form-section">
                 <h1>
                    WELCOME 

                </h1>
            <div className="form-wrap">
                <form action="">
                <div className="input-block">
                <label for="login-email"> Email </label>
                <input type="email" id="login-email"/>
               

                <div className="form-block">
                    
                    <label for ="login-password"> Senha </label>
                    <input type="password" id="login-senha" />
 
                 </div>
                 <div>
                <button type="submit" className="btn-login"> Login</button> 
                 </div>   
                </div>

<div>
<form method="get" action=" http://localhost:3000/cadastro"><button class="btn" type="submit">Cadastre-se</button></form>
</div>
            
               
               
               
                   
            
            </form>    
            </div>
            </section>
        )
    }
}

export default Home;



  