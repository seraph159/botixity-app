import React from 'react';
import { Link} from "react-router-dom";
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
import {signInWithEmailAndPassword} from 'firebase/auth'

class SignIn extends React.Component {

    constructor(){
        super();

        this.state={
            email: "",
            password: "",
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        console.log("called")
        const { email, password} = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password)

            this.setState({
                email: "",
                password: "",
            })

        } catch (err){
            console.log("@manualSignin", err);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});

    }

    render(){

        return(
            <>
    <form className="sign-in-form" onSubmit={this.handleSubmit}>
		<h2 className="text-center">Sign In</h2>
		<hr/>
        <div className="form-group">
        	<input type="email" onChange={this.handleChange} placeholder="Email Address" className="form-control" name="email" required="required" />
        </div>
		<div className="form-group">
            <input type="password" onChange={this.handleChange} placeholder="Password" className="form-control" name="password" required="required" />
        </div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
            <button onClick={signInWithGoogle} className="btn btn-primary btn-block btn-lg">Sign In With Google</button>
        </div>
    </form>
	<div className="text-center">Don't have an account? <Link to="/signup"> Sign Up here</Link></div>
    </>
        )
    }
}

export default SignIn;