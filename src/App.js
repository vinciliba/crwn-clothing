import React,{useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import ShopPage from './shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
      setCurrentUser()
    },[setCurrentUser]);
      
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage  />}  />
       </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  currentUser: user.currentUser
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser  : user  => dispatch (setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
