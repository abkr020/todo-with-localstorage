// import React from 'react';
import log from './debugging/debug'
// import './App.css'
import MyApp from './my_app/MyApp'

// import * as dotenv from 'dotenv';
// dotenv.config(); 
const App:React.FC = ()=> {
log("here")
  return (
    <>
    <div>
    <MyApp />


    </div>
    </>
  )
}

export default App
