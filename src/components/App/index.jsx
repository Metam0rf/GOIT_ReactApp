import React, { Component } from 'react';
import Header from 'components/Header';
import Body from 'components/Body';
import './styles.css';

class App extends Component{

    static APP_TITLE = "Movie mate";

  render() {
    return (
      <div className="App">
        <Header appName={App.APP_TITLE} />
        <Body />
      </div>
    );
  }
}


export default App;
