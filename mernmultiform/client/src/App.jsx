import React from 'react'
import Form from './pages/Form'
// import Success from './components/Success'
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import AllUsers from './pages/AllUsers';

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true
const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path ='/' element={<Home></Home>}/>
        <Route path='/form' element={<Form></Form>}/>
        <Route path = '/user' element={<AllUsers></AllUsers>}/>
      </Routes>
    </Router>

    
  )
}

export default App