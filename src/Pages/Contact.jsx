import React from 'react'
import Nav from '../Component/Navbar'
import Map from '../Component/Map'
import Branch from '../Component/Branch'
import Footer from '../Component/Footer'
import './Contact.css'
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className='contact'>
      <Nav/>
   <motion.div
       initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
                  
    >
      <h1 className='con-h1'>We Cant wait to hear from you.</h1>

      <p className='con-p'>
        <span>ProRoz</span> inteprise is always ready to help. Get in touch and let’s assist you every step of the way in achieviving your Tech goals.
      </p>

      <hr  style={{margin: '20px', color:'black'}}/>
        
     <div className="main">
         <h1 className='main-h1'>Contact Information</h1>

         <p className='main-p'>
            
            Send in your inquiries and feedback, and we will respond as soon as possible.

         </p>

         <div className="conta">
            <div className="conta1">
                 <div className="con-info">
                   <a href="#"><ion-icon name="location" style={{transform:'scale(1.8', color:'#e63946'}}></ion-icon></a>
                    <h2 className='con-info-h2'>Head Office</h2>
                    <p className='con-info-p'>B49, L'Arcade Mall, Area L, World Bank 14C Okohia Layout, New Owerri, Owerri, Nigeria.</p>

                    <h6 className='con-info-h6'>See Other Branches</h6>
                 </div>

                 <div className="con-inf">

                   <a href="#"><ion-icon name="time-outline" style={{transform:'scale(1.8', color:'#f4b400'}}></ion-icon></a>
                    <h2 className='con-info-h2'>Opening Hours</h2>

                    <p className='con-info-p'>8am - 5pm, every weekday</p>
                 </div>
            </div>

            <div className="conta2">
                <h2 className='con-info-h'>Contact Details</h2>
               <div className="grey">
               <a href="tel:=2348145990289" style={{textDecoration:'none'}}>
                  <div className="icon" style={{display:'flex'}}>
                   <a href="#"><ion-icon name="call-outline" style={{color:'blue' }}></ion-icon></a>
                   < h5 className='con-info-h5'>Mobile</h5>
                  </div>
                </a>
                 <h6 className='con-info-9'>  08145990289</h6>
                 <h6 className='con-info-9'>0289883838383</h6>
                 <h6 className='con-info-9'>09069358553</h6>
                 <a href="https://wa.me/2347074293026" style={{textDecoration:'none'}}>
                    <div className="icon" style={{display:'flex'}}>
                   <a href="#"><ion-icon name="logo-whatsApp" style={{color:'green'}}></ion-icon></a>
                   < h5 className='con-info-h5'>Whatsapp</h5>
                   </div>
                  </a>
                   
                   <h6 className='con-info-9'>+2347074293026</h6>
                 
               </div>


            </div>
      </div>
       
       <Map/>
        
      <Branch/>
     </div>

     <Footer/>
        
    </motion.div>   
    </div>
  )
}

export default Contact
