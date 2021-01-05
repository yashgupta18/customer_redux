import React, { useReducer } from "react";
import {auth, provider} from "./firebase";
import './Login.css'
import {actionTypes} from './Redux/loggedInReducer';
import loggedReducer from './Redux/loggedInReducer';
import store from './index';
import {useSelector, useDispatch} from 'react-redux';
import { updateUser } from './Redux/action';
import { connect } from 'react-redux';   


const Login = () => {
  const checkLogin = useSelector(state => state.user)
  console.log(checkLogin)
  const dispatch = useDispatch();
  const signwithGoogle= () =>{
        //sign in
        auth
        .signInWithPopup(provider)
        .then((result) =>{
              dispatch(
                updateUser(result.user)
              )
            
            console.log(result.user);
          })
          .catch((error) => alert(error.message));

    };

  return (
    <div className="login">
      <div>
        <h1>Sign In</h1>
        <button className="btn btn-info" onClick={signwithGoogle}>
        Sign In with Google
        </button>
      </div>
      
    </div>
  );
};

export default Login;