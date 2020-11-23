import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './layouts/Home';
import Login from './layouts/Login';
import Error from './layouts/Error';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <header className='app-header'>
          <Navbar />
        </header>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route>
            <Error message='Error: 404' />
          </Route>

        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
