import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Calculator from './Calculator.js';
import Home from './Home.js';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "Home",
      color : "grey",
      img : "home.jpg",
      desc : "test",
      nilai1 : null,
      nilai2 : null,
      operator : null,
      hasil : null,
    };
    toast.notify('Hello, my name is Ulil')
  }

clicked(menu){
  //utk memperbarui state sesuai dengan menu yang digunmakana 
  this.setState({
    name : "Home",
    color : "grey",
    img : "home.jpg",
    desc : "test",
    nilai1 : null,
    nilai2 : null,
    operator : null,
    hasil : null,
  })
}

info(name){
  if(name=='Calculator'){
    return <Calculator items = {this.state}/>;
  }
  else if(name=='Profile'){
    return <Profile nama='Azza Ulil Afidah'/>;
  }
  else if (name=='Home'){
    return <Home/>
  }
  else{
    return (
      <div>
        ini adalah
        <span className={"selected "+this.state.color}>
        {this.state.name}
        </span>
      <br></br>
      <p>
      {this.state.desc}
      </p>
        <br></br>
        <img src={this.state.img} width="240"></img>
        {/*<br></br>
        <br></br>
        <div className={"image "+ this.state.color}></div>*/}
        </div>)
      }
    }      
  
    render(){
      return(
        <div id="app">
            <nav className="nav">{this.props.items.map((
              menu, index)=> {
                var style = 'menu';
  
                if(this.state.color===menu.color){
                  style = `${style} is-active`;
                } //muncul warna berbeda ketika diklik
  
              return <a
                    className={style+" "+menu.color}
                    onClick={this.clicked.bind(this,menu)}
                    key={index}>
                    {menu.name}
                    </a>;
             }) }
            </nav>
  
            <div className="info">
            {this.info(this.state.name)}
  
            </div>
        </div>
          );
        }
      }
  export default App;