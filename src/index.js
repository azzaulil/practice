import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const items = [
    {
        name : "Red",
        color : "Merah",
        img : "redberry.jpg"
    },
    {
        name : "Yellow",
        color : "Kuning",
        img : "yellrose.jpg"
    },
    {
        name : "Green",
        color : "Hijau",
        img : "green.jpg"
    },
    {
        name : "Blue",
        color : "Biru",
        img : "blueberry.jpg"
    }

];


ReactDOM.render(<App items={items}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();