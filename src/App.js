import React,{useEffect,useState} from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import {Switch,Route} from 'react-router-dom';
import ShopePage from './shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';


function App() {
  const [currentUser,setCurrentUser]=useState('')

  useEffect(() => {
    const unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(currentUser);
    });

   return () => {
      unsubscribefromAuth(currentUser); 
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
