import React, { Component } from 'react';
import { BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
export default class App extends Component {
  render() {
    return <div>
      <Router>
      <Routes>
      
       <Route path='/' element={<SignIn/>} /> 
       <Route path ='signUp' element={<SignUp/>} /> 
      
      </Routes>
      </Router>
    </div>;
  }
}

