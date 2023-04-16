import React from 'react'
import Form from './pages/Form'
// import Success from './components/Success'
import axios from "axios";


axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true
const App = () => {
  return (
    <div>

      <Form></Form>
      {/* <Success></Success> */}
    </div>
  )
}

export default App