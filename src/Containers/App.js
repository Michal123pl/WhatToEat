import React, { Component } from 'react';
import MainContent from './MainContent';
import Footer from '../Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <main>
          <MainContent />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
