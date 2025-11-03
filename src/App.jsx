import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Route, Routes} from "react-router-dom" 
import Login from './Pages/Login'
import Sign from './Pages/Signup'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Join from './Pages/Join'
import User from './Pages/Username'
import Form from './Pages/Form'
import Serve from './Component/Serve'
import Branch from './Component/Branch'
import Map from './Component/Map'
const App = () => {
  return (
    <>
      <Routes>
        <Route  path='/'  element={<Login/>}/>
        <Route  path='/sign'  element={<Sign/>}/>
        <Route  path='/home'  element={<Home/>}/>
        <Route  path='/about'  element={<About/>}/>
        <Route  path='/con'  element={<Contact/>}/>
        <Route  path='/serve' element={<Serve/>}/>
        <Route  path='/Join'  element={<Join/>}/>
        <Route  path='/user'  element={<User/>}/>
        <Route  path='/form'  element={<Form/>}/>
        <Route  path='/branch'  element={<Branch/>}/>
        <Route  path='/map'  element={<Map/>}/>

      </Routes>
    
    </>
  )
}

export default App
