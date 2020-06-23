import React,{useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import {Switch,Route} from 'react-router-dom';
import ShopePage from './shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

function App({ setCurrentUser,currentUser }) {
  useEffect(() => {
      setCurrentUser(user)
    },[setCurrentUser]);
      
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={ShopePage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
       </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser  : user  => dispatch (setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
