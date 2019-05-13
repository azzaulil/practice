import React, { Component } from 'react';

import './App.css';

import Pr from './Profile.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "Home",
      color : "grey",
      img : "home.jpg",
      nilai1 : null,
      nilai2 : null,
      operator : null,
      hasil : null,
    };

  }

export default App;