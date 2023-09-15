import React, { useState } from 'react';
import {Router, Route, Routes} from 'react-router-dom'
import './App.css';
import './reset.css'
import Nav from './Layout/LayoutNav';
import Header from './Layout/LayoutHeader';
import Body from './Layout/LayoutBody'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <div className="App">
      <Header toggleNav={toggleNav} />
      {isNavOpen && <Nav isOpen={isNavOpen} />}
      <Body isNavOpen={isNavOpen}/>
    </div>
  );
}

export default App;