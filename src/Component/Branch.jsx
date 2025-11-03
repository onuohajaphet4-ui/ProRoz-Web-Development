import React from 'react'
import './Branch.css'

const Branch = () => {
  return (
    <div style={{backgroundColor:'#fff', borderRadius: '16px' ,boxShadow:'0 4px 12px grey' ,padding:'16px',
        maxWidth: '900px', width: '80%', margin: '40px auto'}}
    >
        <p style={{textAlign:'center', padding:'2%', fontSize:'20px', fontFamily: 'arial' , color:'rgb(66, 65, 65)'}}>Our Branches</p>
        <h1 className='bra-h1' >Where To Find Us</h1>
        
        <p style={{textAlign:'center', padding:'2%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>
        See the list of our office branches below and feel free to visit the closest one to you.
        </p>

        <input className='bran-input' type="text"  placeholder='Search Branch'/>

        <div className="branch">
            <div className="branch1">
                <a href="#"><ion-icon name="location" style={{transform:'scale(1.8', color:'#e63946'}}></ion-icon></a>
                <h2 style={{fontFamily: 'arial' , color:'rgb(66, 65, 65)' , padding:'4%'}}>Kebbi</h2>
                <p style={{textAlign:'center', padding:'3%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>Plot 20, Emir, Haruna Road, Birnin - Kebbi, Kebbi</p>

                 <p style={{textAlign:'center', padding:'2%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>Sunday.bamayi@fcmb.com</p>
                 <a href="tel:=2347030964534" style={{textDecoration:'none'}}>
                 <h3 className='bra-h3'>07030964534</h3>
                 </a>
            </div>

            <div className="branch1">
                <a href="#"><ion-icon name="location" style={{transform:'scale(1.8', color:'#e63946'}}></ion-icon></a>
                <h2 style={{fontFamily: 'arial' , color:'rgb(66, 65, 65)' , padding:'4%'}}>Lagos</h2>
                <p style={{textAlign:'center', padding:'3%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>287 old ojo road  ooutlet,oluti, ikeja,Lagos</p>

                 <p style={{textAlign:'center', padding:'2%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>FxdmlArinze@gmail.com</p>
                 <a href="tel:=234904057933" style={{textDecoration:'none'}}>
                 <h3 className='bra-h3'>090282883733</h3>
                 </a>
            </div>

            <div className="branch1">
                 <a href="#"><ion-icon name="location" style={{transform:'scale(1.8', color:'#e63946'}}></ion-icon></a>
                 <h2 style={{fontFamily: 'arial' , color:'rgb(66, 65, 65)', padding:'4%'}}>Anambra</h2>
                 <p style={{textAlign:'center', padding:'3%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>267, uwka ,near unizik ,uwaka road ,Anambra</p>

                 <p style={{textAlign:'center', padding:'2%', fontSize:'16px' , color:'rgb(66, 65, 65)'}}>Wiloreta@gmail.com</p>
                 <a href="tel:=2349069358552" style={{textDecoration:'none'}}>
                   {/* <a href="#"><ion-icon name="call-outline" style={{color:'blue' }}></ion-icon></a> */}
                 <h3 className='bra-h3'>09069358552</h3>
                 </a>
             </div>
        </div>

      
    </div>
  )
}

export default Branch
