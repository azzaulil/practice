import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
class Profile extends Component {
  constructor(props){
    super(props);
  }
  notify(){
   
    toast.notify('Hello world!');
   }
  render() {
    
    return (
        <div>
          <button size="200px" onClick={this.notify}>Notify</button>
          <br/><br/>
          <img src="home.jpg"/>
        </div>
        
    );
  }
}

export default Profile;