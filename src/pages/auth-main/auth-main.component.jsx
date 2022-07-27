import React from 'react';
import SignUp from '../../components/sign-up/signup.component';
import SignIn from '../../components/sign-in/signin.component';
import { Route} from "react-router-dom";
import './auth-main.css'

class SignInAndSignUp extends React.Component {

    render(){
        
        return(
        <div className="auth-main h-100 d-flex align-items-center">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-sm-4 d-flex justify-content-center">
        <div className="auth-form">

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        
        </div>
        </div>
        </div>
        </div>
        </div>
        );
    };

}

export default SignInAndSignUp;