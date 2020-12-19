import React, { Component } from 'react';
import Menu from '../components/menu';


export default class Home extends Component {

    render(){
        return (
            <div>
                <h1>Pagina inicial</h1>
                <Menu />
            </div>
        );
    }
}