import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Toaster position='bottom' toastOptions={{duration: 3000}}/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path ='/register' element ={<Register></Register>}/>
        <Route path ='/login' element ={<Login></Login>}/>
      </Routes>
    </Router>
  )
}

export default App