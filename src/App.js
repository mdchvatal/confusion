import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { MemoryRouter } from 'react-router-dom';

class App extends Component{

  render() {
      return (
        <MemoryRouter>
          <div>   
            <MainComponent/>
          </div>
        </MemoryRouter>
    );
  }
}

export default App;
