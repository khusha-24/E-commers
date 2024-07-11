import React from 'react'
import Login from './components/Login'
import Blogs from './components/Blogs'
import Women from './components/Women'
import Men from './components/Men'
import Kids from './components/Kids'
import Snacks from './components/Snacks';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>      
      <Router>
        <Routes>
        <Route path='/' element={ <Login />}/>
        <Route path='/blogs' element={ <Blogs />}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App