import React, {children} from 'react';
import { Autenticando } from './auth';
import Home from './Home.js';
import Login from './Login.js';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Cadastro from './cadastro.js';
import Api from './Api.js';

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
        <Route path="/pokemon" >
        <Api/>
        </Route>
        <PrivateRoute path="/main">
            
            
        </PrivateRoute> 
    </Switch>
    </BrowserRouter>
);
export default Routes;