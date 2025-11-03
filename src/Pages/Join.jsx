// import React from 'react'
import './Join.css'
import {Box, CircularProgress} from "@mui/material"
import { motion } from "framer-motion";
import './Signup.css'
import img from '../assets/download.jpeg'
import {Link} from 'react-router-dom'
// import axios from "axios"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Signup = () => {
      const navigate = useNavigate()
      const [firstName, setFirstName ] = useState ('')
      const [lastName, setLastName ] = useState ('')
      const [phoneNumber, setPhoneNumber] = useState ('')
      const [address, setAddress] = useState ('')

      const handleNext =  (event) => {
       event.preventDefault ()
    

       const personalData={
         firstName,
         lastName,
         phoneNumber,
         address
       }

       localStorage.setItem('personalData', JSON.stringify(personalData))

       navigate('/user')
      
  }

  return (

    <Box
    sx={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
          }}
    >

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

     
    <div className='lform'
      
    >
      <form action=""  onSubmit={handleNext}  >
         

        <h1> Create Account </h1>
            
            <input type="text" 
             placeholder="Enter First Name*" 
             className="sign-input"
             value={firstName}
              onChange={(event) =>setFirstName(event.target.value)}
              required
            />
            <br /> <br />


           <input type="text" 
            placeholder=" Enter Last Name*" 
             className="sign-input"
             value={lastName}
              onChange={(event) =>setLastName(event.target.value)}
              required
            />
           <br /> <br />

           <input type="text" 
            placeholder="Enter  Contact Address*" 
             className="sign-input"
             value={phoneNumber}
              onChange={(event) =>setPhoneNumber(event.target.value)}
              required
            />
           <br /> <br />

           <input type="text" 
            placeholder="Enter Your Gender*" 
             className="sign-input"
             value={address}
              onChange={(event) =>setAddress(event.target.value)}
              required
            />
           <br /> <br />


            <select name="form" >
               
                <option value="male">What Are Your Interest</option>
                <option value="female">Web Design Fundamentals</option>
                <option value="cat">Front-end Development</option>
                <option value="cat">Back-end Development</option>
                <option value="cat">Full-stack Development</option>
                <option value="cat">E-commerce Solutions</option>
                <option value="cat">UI/UX Design</option>
                <option value="cat">Website Optimization & Deployment     </option>
                required
            </select> <br/> <br/>

            {/* <select name="duration" >
               
                <option value="male">SUBSCRIPTION PLAN</option>
                <option value="female">3 Months Course For 250$</option>
                <option value="cat">6 Months Course For 400$</option>
                <option value="cat">1 Year Course For 500$</option>
            </select>  <br/> <br/> */}



        <button type='submit'  className="sign-btn" style={{borderRadius:'10px', fontSize:'10px'}}>Sign up</button>

    
      </form>
    </div>
    </motion.div>

  </Box>
  )
}

export default Signup
