import React from 'react'
import './App.css'
import axios from 'axios'

// Components
import Login from './Page/Login/Page'
import Cadastro from './Page/Cadastro/Page'

export const api = axios.create({
  // baseURL: 'https://hack2030-backend.onrender.com/'
  baseURL: 'http://localhost:5000'
})

function App() {
  

  return (
    <div className="App">
      <Login />
      <Cadastro />
    </div>
  )
}

export default App
