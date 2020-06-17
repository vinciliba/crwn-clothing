import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import {Switch,Route} from 'react-router-dom';
import ShopePage from './shop/shop.component';



function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={ShopePage} />
       </Switch>
    </div>
  );
}

export default App;
