import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pr from './Profile.js';
import Home from './Home.js';


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
  handleSubmit(e) {
    e.preventDefault() ;

    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch (operator){
      case '+':
        hasil = nilai1 + nilai2;
        break;
      case '-':
        hasil = nilai1 - nilai2;
        break;
      case '*':
        hasil = nilai1 * nilai2;
        break;
      case '/':
        hasil = nilai1 / nilai2;
        break;
    }

    this.setState({nilai1, nilai2, operator, hasil});

    this.refs.nilai1.value = null;
    this.refs.nilai2.value = null;
  }

  renderHasil(){
    const {nilai1, nilai2, operator, hasil} = this.state;

    if(this.state.hasil){
      return (
        <div>
          <br/>
          <p className="alert alert-success">
            {nilai1+operator+nilai2+'='+hasil}
          </p>
        </div>
      );
    }
  }

  render() {
    
    return (
	
      <div id="app">
      
          <nav className="nav">{this.props.items.map((menu,index) => {
            var style='menu';

            if (this.state.color === menu.color){
              style = `${style} is-active`;
            }

            return <div
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this, menu)}
                  key={index}>
                  {menu.name}
                </div>;
          })}
          </nav>

          <div className="info">
            {this.info(this.state.name)}
              
          </div>
      </div>
    
    );
  }

clicked(menu){
  //utk memperbarui state sesuai dengan menu yang digunmakana 
  this.setState({
    name : menu.name,
    color : menu.color,
    img : menu.img,
  })
}

info(name){
  if(name=='Calculator'){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind.this}>
          <label>Nilai :</label>
          <input type="number" ref="nilai1" className="form-control"/>
          <select ref="operator" className="form-control">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="number" ref="nilai2" className="form-control"/>
          <br/>
          <button className="btn btn-primary">Lihat hasil</button>
        </form>
        
        {this.renderHasil()}
        
      </div>
    );
  } else if(name=='Profile'){
    return <Pr/>;
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
      <br></br>
        <img src={this.state.img} width="240"></img>
      </div>
      );
      }
    }
  }
  
  export default App;