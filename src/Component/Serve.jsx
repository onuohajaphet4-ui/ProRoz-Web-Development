import React from 'react'
import './Serve.css'
import Nav from './Navbar'
import image from '../assets/service.jpeg'
import {Link } from 'react-router-dom'
import Container from './Container'
import Footer from './Footer'
const Serve = () => {
  return (
    <div className='service'>
       <Nav/>
      <div className='ser-hero'>

       <div className='ser-head'>
        <h2>
        Your next role could help millions across Africa unlock better Technology opportunities.
        </h2>

       
        <p>Step into work that rewards your skills and sets you apart. We’re building trusted fintech products that deliver real value and make everyday money decisions smarter, simpler, and more empowering. It all begins with you!</p>
        
       <Link to='/join'><button className='cn' >
            Join the Team
        </button></Link>  
       </div>
         
         <img src={image} alt=""  className='ser-img'/>

      </div>
       
       <hr  style={{margin:'4%'}}/>
      <div className="ser-con">
         <h1>Bold Goals. Smart People. <br /> Clear impact</h1>

          <div className='ser-flex'>
         <div className="connn">
            <h2>2017</h2>
              <h3>Year Founded</h3>
            <h4>Built on real needs, grown through lasting impact</h4>
         </div>

         <div className="connn">
            <h2 className='h2'>5+</h2>
             <h3>Office NationWide</h3>
            <h4>From one branch to a growing presence across </h4>
         </div>


         <div className="connn">
            <h2 className='h1'>110+</h2>
             <h3>Student Strong</h3>
            <h4>Powered by people. Driven by great learners</h4>
         </div>

         
         <div className="connn">
            <h2 className='h3'>500+</h2>
             <h3>Live Impacted</h3>
            <h4>hanging lives, one solution at a time.</h4>
         </div>
         </div>
         
      </div>

      <Container/>

      <Footer/>
        
    </div>
  )
}

export default Serve
