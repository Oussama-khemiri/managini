import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class signIn extends Component {
  render() {
    return <div className="signIn">
        <h1 className="sigInTitle">signIn</h1>
        <form className='singInForm'>
        <label>User Name</label>
        <input type='text' className='signInInput'placeholder="Enter your user Name..."/>
        <label>Email</label>
        <input type='text' className='signInInput'placeholder="Enter your Email..."/>
        <label>Password</label>
        <input type='text' className='signInInput'placeholder="Enter your Password..."/>
        <button className='sigInButton' type='submit'>signIn</button>
        </form>
        <button className='signInSignUpButton'>
            <Link     className='link' to="/signUp">Go To SignUp</Link>
        </button>






    </div>;
  }
}
