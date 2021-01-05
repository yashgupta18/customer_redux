import React, { Component , useEffect, useState} from 'react';
import Login from "./Login";
import Home from "./Home";
import {auth} from './firebase'

const App=()=> {
  const [user, setUser]=useState(null);
  auth.onAuthStateChanged(userAuth=>{
    setUser(userAuth)
  })
  
  console.log(auth.currentUser)
  return(
    <div className="">      
      {auth.currentUser ? ( 
        <h1>
          <div className="app__body">
            <Home />
          </div>
        </h1>
      ) : (
        <Login />
      )};
    </div>
  );
}
export default App;
