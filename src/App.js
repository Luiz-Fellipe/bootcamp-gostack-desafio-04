import React, {Component} from 'react';

import './global.css';
import PostList from './components/PostList';
import Header from './components/Header';

class App extends Component {

  render(){
    return (
      <>
      <Header />
      <PostList />
      </>
    ) 
  }

}

export default App;