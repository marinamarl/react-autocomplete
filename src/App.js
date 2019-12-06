import React from 'react';
import Search from './Components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='advertisement'><p>Banner Space</p></div>
    <div className='second-col-wrap'>
      <div className='xe-logo'><img src='https://pbs.twimg.com/profile_images/461419627638042626/A2LeCqw4_400x400.png'alt="xrysi efkairia logo"/></div>
      <div className='body-wrap'>
        <p>Which place are you looking for?</p>
        <Search/>
      </div>
    </div>
    </div>
  );
}

export default App;
