import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//pages
import NotFoundPage from './pages/page-not-found';
import Home from './pages/home';


export default class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}