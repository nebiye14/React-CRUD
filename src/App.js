/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import profileImage from './img/nebiye.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nebiye </h1>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
