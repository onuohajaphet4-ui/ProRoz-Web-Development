import React from 'react'
import './Navbar.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'

const Login = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='navbar'>
        <h2 className='nav-h2'>ProRoz</h2>
  
     <div className='nav'>
        <ul  className='nav-ul'>
         <Link to= '/home' style={{textDecoration:'none', color:'inherit'}}><li className='nav-li'>Home</li></Link> 
          <Box   sx={{ minWidth: 120 ,backgroundColor: 'transperent', }} >
            <FormControl variant='outlined'  sx={{ minWidth: 120, "& .MuiOutlinedinput-notchedOutline":{border: 'none'} , }} >
              <  InputLabel id="demo-simple-select-label" style={{border: 'none', color:'white'}}>Company</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <Link to= '/about' style={{textDecoration:'none'}}> <MenuItem value={30} sx={{backgroundColor: 'coral', color:'white'}}>About</MenuItem> </Link>
           <Link to= '/serve' style={{textDecoration:'none'}}><MenuItem value={10} sx={{backgroundColor: 'coral', color:'white'}}>Service</MenuItem></Link>
           <MenuItem value={20} sx={{backgroundColor: 'coral', color:'white'}}>Design</MenuItem>
          
           </Select>
          </FormControl>
        </Box>
          
        <Link to= '/con' style={{textDecoration:'none', color:'inherit'}}><li className='nav-li'>Contact</li></Link>
      </ul>
     </div>
    </div>
  )
}

export default Login
