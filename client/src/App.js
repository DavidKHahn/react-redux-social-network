import React, { Fragment } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';


const App = () => (
    <div className="App">
      <Fragment>
        <h1>Social Network</h1>
        <Navbar />
        <Landing />
      </Fragment>
    </div>
)


export default App;
