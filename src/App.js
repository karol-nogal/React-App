import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import {NavMenu} from './Navigation';
import Content from './content/Content';

class App extends React.Component {
  state={
    avatarURL:""
  }
  handleOnAvatarUpdate=(url)=>{
    this.setState({
      avatarURL: url
    })
  }
  render(){
  return (
    <Router>
        <NavMenu  avatarURL={this.state.avatarURL} />
        
        <Content onAvataUpdate={this.handleOnAvatarUpdate}/>
        
    </Router>
  );
  }
}

export default App;
