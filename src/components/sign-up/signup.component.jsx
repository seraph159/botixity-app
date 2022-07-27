import React from 'react';
import { Link } from "react-router-dom";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'

class SignUp extends React.Component {

    constructor(){
        super();

        this.state={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !==  confirmPassword){
            alert("passwords do no match")
            return
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);

            console.log(user, {displayName})
            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (err){
            console.log("@manualSignup", err);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});

    }
    
    render(){

        return(
            <>
       <form className="sign-up-form" onSubmit={this.handleSubmit}>
		<h2 className="text-center">Sign Up</h2>
		<hr/>
        <div className="form-group">
        	<input type="text" onChange={this.handleChange} placeholder="Username" className="form-control" name="displayName" required="required" />
        </div>
        <div className="form-group">
        	<input type="email" onChange={this.handleChange} placeholder="Email Address" className="form-control" name="email" required="required" />
        </div>
		<div className="form-group">
            <input type="password" onChange={this.handleChange} placeholder="Password" className="form-control" name="password" required="required" />
        </div>
		<div className="form-group">
            <input type="password" onChange={this.handleChange} placeholder="Confirm Password" className="form-control" name="confirmPassword" required="required" />
        </div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<p className="small text-center">By clicking the Sign Up button, you agree to our <br/><a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a></p>
       </form>
	<div className="text-center">Already have an account? <Link to="/signin">Login here</Link></div>
    </>
        )
    }
}

export default SignUp;