import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='foot'>
      <div className="first">
         <span>ProRoz</span> Enterprise

         <p style={{paddingTop:'10px'}}>
           ProRoz  Enterprise is building Africa’s leading Technology sociaty by integrating Tech into the everday life and association of our partners, unlocking financial success for individuals and businesses.
         </p>

          <div className="icon">
                            <a href="#"><ion-icon name="logo-facebook" ></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>
      </div>

      <div className="second">
         <div className="list">
            <h4>Company</h4>
            <ul>
                <Link to='/home' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>Home</li></Link>
                <Link to='/about' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>About</li></Link>
                <Link to='/con' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>Contact</li></Link>
                <Link to='' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>Service</li></Link>
                <Link to='' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>Design</li></Link>
                <Link to='/sign' style={{color:'inherit', textDecoration:'none'}}><li className='foot-li'>Registration</li></Link>
            </ul>
         </div>

         <div className="list">
            <h4>Contact</h4>
            <ul>
                <a href="https://wa.me/2347074293026" style={{textDecoration:'none' ,color:'inherit'}}><li className='foot-li'>whatsap</li></a>
               <a href="tel:=2349069358552" style={{textDecoration:'none' ,color:'inherit'}}> <li className='foot-li'>phone:09069358552</li></a>
               <a href="tel:=2348145990289" style={{textDecoration:'none' ,color:'inherit'}}> <li className='foot-li'>phone:08145990289</li></a>
                <li className='foot-li'>phone:09874747447277</li>
                <li className='foot-li'>Address:L'acarde,New Owerri</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer
