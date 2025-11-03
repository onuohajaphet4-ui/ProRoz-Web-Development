// import React from 'react'
import React, { useState } from "react";
import Nav from '../Component/Navbar'
import'./Home.css'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {CircularProgress} from '@mui/material'
const Home = () => {
   const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState ('')
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState()
  const handlelogin = async () => {
    setLoading(true)
    setError('')
    try{
        const res = await
    axios.post('https://students-learning-api.onrender.com/api/auth/login ', {email,password})
        console.log(res)
        navigate('/form')
    }catch(err){
        console.error(err)
        setError(err?.response?.data?.error)
    }finally{
        setLoading(false)
       }
 }

  return (
    <div className='con'>
      <Nav/>

       <motion.div
       initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }} 
       >
          <div class="content">
            <div>
           <h2 className='hero-h2'>Web Design & <br/><span className='hero-span'>Development</span> <br/>Course</h2>

            <p class="para">
                PraRoz award-winning bootcamps help launch your career in tech 
                 Learn in-person or online in flexible full-time or part-time schedules.
            </p>

            <Link to= '/join'><button className='cn'> Join Us</button></Link>
          </div>


          <div className='home-form'>

            <h2 className='form-h2'>{error ? error : 'Login Here'}</h2>
              <input type="text" placeholder='Enter Username' className='form-inpout'  value={email}
            onChange={(e) =>setEmail(e.target.value)}/> <br /> <br />
              <input type="password" placeholder='Enter password' className='form-inpout' value={password}
            onChange={(e) =>setPassword(e.target.value)}/>
              <br /> <br />
             <button onClick={handlelogin} class="cnn"> {loading ? <CircularProgress size={24} /> : "Login"}</button>

           <p className="liw">Login with</p>

            <div className="icon">
                            <a href="#"><ion-icon name="logo-facebook" ></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>
          </div>



          </div>
        </motion.div>
     
      
        
    </div>
    
  )
}

export default Home
