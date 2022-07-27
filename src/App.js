import './App.css';
import React from 'react';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore"


import Home from './pages/home/home';
import SignInAndSignUp from './pages/auth-main/auth-main.component';
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

import SignUp from './components/sign-up/signup.component';
import SignIn from './components/sign-in/signin.component';


class App extends React.Component{

  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;
  isCurrentUserLoggedIn = null;

  componentDidMount(){

    const setCurrentUser = this.props.setCurrentUser;


    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User 

        const userRef = await createUserProfileDocument(userAuth);

        const unSubscribeFromSnapshot = onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log("userAuth SIGN_IN fired: ", this.props)
          // console.log("userAuth SIGN_IN fired: ", userAuth)
          this.isCurrentUserLoggedIn = true;
          this.props.history.push("/app");
        })

        //media queries
        // const handleMediaSize = e => document.body.classList.add('nav-function-minify');
        // window.matchMedia("(max-width: 576px)").addEventListener('change', handleMediaSize);



        // ...
      } else {
        // User is signed out
        setCurrentUser({currentUser: userAuth});
        // console.log("userAuth SIGN_OUT fired: ", userAuth)
        this.isCurrentUserLoggedIn = false;
        if(this.props.location.pathname !== "/signup") this.props.history.push("/signin");

        
      }
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log(this.unsubscribeFromAuth());
  }

  render(){
  return (
    <>

    {/* {console.log( "main Sate", this.props.currentUser.currentUser)} */}
    <Switch>
    <Route path="/app" render={() => this.isCurrentUserLoggedIn ? (<Home/>) : (<Redirect to="/signin" />)} />
    {/* <Route path="/app" component={Home} /> */}
    <Route path="/signup" component={SignInAndSignUp} />
    <Route path="/signin" component={SignInAndSignUp} />
    </Switch>

    </>
  );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
