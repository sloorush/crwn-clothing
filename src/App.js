import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={hats}/>

      </Switch>
    </div>
  );
}

export default App;
