import React from 'react'
import Landing from './pages/index'
import Cryptocurrency from './pages/cryptocurrency/cryptocurrency'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ={'/'} element ={<Home></Home>}/>
        <Route path= {'/cryptocurrency'} element = {<Crypto}/>
      </Routes>
    </Router>
  )
}

export default App