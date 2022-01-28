import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class signUp extends Component {
  render() {
    return <div className="signUp">
    <h1 className="sigUpTitle">signUp</h1>
    <form className='sigUpForm'>
    <label>User Name</label>
    <input type='text' className='signUpInput'placeholder="Enter your user Name..."/>
    <label>Email</label>
    <input type='text' className='signUpInput'placeholder="Enter your Email..."/>
    <label>Password</label>
    <input type='text' className='signUpInput'placeholder="Enter your Password..."/>
    <button className='signUpButton' type='submit'>signIn</button>
    </form>
    <button className='signUpSignInButton'>
        <Link className='link' to="/">Go To SignIn</Link>
    </button>






</div>;
  }
}
