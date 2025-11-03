import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import img from '../assets/download.jpeg'
const Login = () => {
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
        navigate('/home')
    }catch(err){
        console.error(err)
        setError(err?.response?.data?.error)
    }finally{
        setLoading(false)
       }
 }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "97 0.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginLeft: "auto",
        marginRight: "auto",
        p: 2,
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
        <Paper
          elevation={10}
          sx={{
            p: { xs: 4, sm: 7 },
            width: { xs: "90%", sm: 500 },
            borderRadius: "20px",
            textAlign: "center",
            background: " rgba(252, 181, 134, 0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 60,
              borderRadius: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: "white" }}
          >
         {error ? error : 'Welcome Back'}
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            label="Usernaame"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            sx={{

                input:{color:"white"},
        
              mb: 2,
              "& .MuiOutlinedLabel-root": { color: "white"},
              "& .MuiOutlinedLabel-root .Mui-focused ":{color:"white"},
              "& .MuiOutlinedInput-root": { borderRadius: "12px", color:"white",
                "& fieldset":{borderColor: 'white'},
              "&:hover fieldset":{ borderColor: 'white' },
              "&.Mui-focused fieldset":{borderColor: 'transparent'},
              
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            sx={{
               
              mb: 3,
              "& .MuiOutlinedInput-root": { borderRadius: "12px"   , 
              "& fieldset":{borderColor: 'white'},
              "&:hover fieldset":{ borderColor: 'white' },
              "&.Mui-focused fieldset":{borderColor: 'transparent'}
               },
              
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handlelogin}
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",

              backgroundColor:"rgba(241, 107, 18, 0.3)",
              boxShadow:"0 10px 30px rgba(0, 0, 0, 0.3)",
              "&:hover":{
                transform:"translatey(-10px)"
              }
            }}
          >
            
          
             {loading ? <CircularProgress size={24} color="inherit"/> : "Login"}
          </Button>
          
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary", textAlign: "center" }}
          >
            Don’t have an account?{" "}
            
             <Link to ='/sign' style={{ color: "white",
                fontWeight: 600,
                textDecoration: "none",}}> Sign up</Link>


            
             

          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;