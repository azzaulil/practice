import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "Home",
      color : "grey",
      img : "home.jpg"
    };
  };

  clicked(menu){
    this.setState({
      name : menu.name,
      color : menu.color,
      img : menu.img
    });
  }
  render() {
    return (
	
      <div id="app">
      
          <nav className="nav">{this.props.items.map((menu,index) => {
            var style='menu';

            if (this.state.color === menu.color){
              style = `${style} is-active`;
            }

            return <a
                  className={style+" "+menu.color}
                  onClick={this.clicked.bind(this, menu)}
                  key={index}>
                  {menu.name}
                </a>;
          })}
          </nav>

          <div className="info">
  ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span>
          <br></br>
          <br></br>
          <img src={this.state.img} width="240"></img>
          </div>
      </div>
    
    );
  }
}

export default App;