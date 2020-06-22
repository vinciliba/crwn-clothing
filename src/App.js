import React,{useEffect,useState} from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import {Switch,Route} from 'react-router-dom';
import ShopePage from './shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


function App() {
  const [currentUser,setCurrentUser]=useState('')

  useEffect(() => {
    const unsubscribefromAuth = auth.onAuthStateChanged(user => setCurrentUser(user) );   
    console.log(currentUser)
    return () => {
      unsubscribefromAuth(); 
      }
      
  },[currentUser]);

  return (
    <div>
      <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={ShopePage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
       </Switch>
    </div>
  );
}

export default App;
