import React, {children} from 'react';
import { Autenticando } from './auth';
import Login from './Login.js';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Cadastro from './cadastro.js';
import Api from './Api.js';
import Pokemon from './pokemon.js'
import Favoritos from './favoritos.js'


const PrivateRoute = ({ component: Component, ...rest } ) => (
    <Route{...rest} render={props => (
        Autenticando.isAuthenticated(children) ? (
            <Component{...props}/>
        ) : (
            <Redirect to={{pathname:'/', state: {from: props.location} } }/>
        )
    ) } />
);

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
        <Login/>
        </Route>
        <Route path="/cadastro">
        <Cadastro/>
        </Route> 
        <Route path="/pokedex" >
        <Api/>
        </Route>
        <Route path="/pokemon/:name">
        <Pokemon/>
        </Route>
        <Route path="/favoritos/:name" component={Favoritos}>
        {/* <Favoritos/> */}
        </Route>
    </Switch>
    </BrowserRouter>
);
export default Routes;