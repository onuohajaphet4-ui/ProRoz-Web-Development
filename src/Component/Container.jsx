import React , {useState}from 'react'
import './Container.css'
const Container = () => {

    const [index, setIndex] = useState(0)

    const container = [ 
      { id: 1,
        color: 'white',
        title: '*Web Design Fundamentals*',
        text: ' Learn the principles of effective web design',
        icon:<a href="#"><ion-icon name="brush" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>,
      },
    
      { id: 2,
         color: 'white',
         title: 'Front-end Development*',
         text: ' Master HTML, CSS, JavaScript, and more',
         icon: <a href="#"><ion-icon name="code" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>,
     },
      { id: 3,
         color: 'white',
         title:'*Back-end Development*',
          text: 'Explore PHP, Python, Ruby, and other server-side technologies',
          icon:  <a href="#"><ion-icon name="laptop" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>
        },
      { id: 4, color: 'white', 
        title:'*Full-stack Development*',
        text: 'Combine front-end and back-end skills for comprehensive web development',
        icon:  <a href="#"><ion-icon name="layers" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>
    },
      { id: 5, color: 'white', 
        title:'E-commerce Solutions*',
        text: 'Build online stores and learn e-commerce best practices',
        icon: <a href="#"><ion-icon name="storefront" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>
    },
      { id: 6, color: 'white',
        title: '*UI/UX Design',
        text: 'Create user-centered designs for enhanced user experience',
        icon: <a href="#"><ion-icon name="people" style={{transform:'scale(1.8', color:'blue'}}></ion-icon></a>
    },


    ]

    const handleSkip = () => {
        setIndex ((prevIndex) => (prevIndex + 1) % container.length) 
    }
  return (
    <div style={{
        padding: '5%'
    }}>

        <h1 className='h11'>Our Courses</h1>

        <p className='pppp'>At <span>ProRoz</span>,  we offer comprehensive web design and development courses to equip you with the skills you need to succeed in the digital world. Our services include:</p>
        <div className='wrapper' style={{ backgroundColor: container[index].color}}>
        <div className="icon">{container[index].icon}</div>
            <h2 style={{color:'black'}}> {container[index].title}</h2>
             <p>{container[index].text}</p>
            <button onClick={handleSkip} className='cnnnn' >Skip</button>
         
        </div>
    </div>
  )
}

export default Container
