import React from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content';
import NameBar from './components/NameBar';

import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import "styles/base/_app.sass"
import styles from "./app.sass"  // Css-module styles

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = { currentNodeItem: null };
      this.getNodeItem = this.getNodeItem.bind(this);
  }

  getNodeItem(node) {
    console.log(node);
    this.setState({ currentNodeItem: node });
  }

  render() {
    return (
      <div className='App'>
        <NameBar/>
        <div className="app-main">
          <Navigation getNodeItem={this.getNodeItem}/> 
          <Content nodeItem={this.state.currentNodeItem}/>
        </div>
      </div>
    );
  }
}

export default App;
