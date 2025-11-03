import React from 'react'
import Nav from '../Component/Navbar'
import './About.css'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import Footer from '../Component/Footer'

const About = () => {
  return (
    <div className='about'>
        <Nav/>
      
      <motion.div
             initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
         
       >

      <div className='about-hero'>
        <h4 className='about-h4'>About Us</h4>
        <h2 className='about-h2'>Creating a world where <br />Tech development career <br />is within reach</h2>
      </div>

      <div className="about-info">
          <p className='about-in-p'>
             We put our customers at the center of what we do. We understand the usual techneoly needs 
             and pressures of the new tech litratracy in the recent world . We continue to work to deliver Web Development
            Courses that give customers more control and help them to get on with their Tech euthusiam.
          </p>

          <div className="about-con">
             <div className="con1">
                <h6 className='about-h6'>
                    Our Vision
                </h6>

                <h4 className='about-h44'>To be Africa’s leading Tech development provider.</h4>
             </div>

             <div className="con2">
                <h6  className='about-h6'>
                    Our Mission
                </h6>

                <h4  className='about-h44'>To ensure acces to Tech solution is a universal opportunity.</h4>
             </div>
          </div>

          <hr  style={{margin: '30px'}}/>

          <p className='about-pp'>Start your journey to <br />  Techonolgy literacy today.</p>
          
         <div className="about-con">
            <div className="coon1">
               <h2 className='coon-h2'>Contact us today</h2>

               <p className='coon-p'>Have questions about our products? We're here to help.</p>

              <Link to='/map'><button className='coon-btn' style={{backgroundColor:'skyblue'}}>Reach Us Here</button></Link> 
            </div>

            <div className="coon2">
               <h2 className='coon-h2'>Visit our branch today</h2>

               <p className='coon-p'>Prefer face-to-face chat? Find a branch close to you.</p>

             <Link to='/branch'> <button className='coon-btnn'>Locate a branch</button> </Link> 
 
            </div>
          
          </div> 
      </div>

      <Footer/>
      </motion.div>
    </div>
  )
}

export default About
