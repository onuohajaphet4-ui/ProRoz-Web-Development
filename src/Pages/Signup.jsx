import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../assets/download.jpeg";
import "./Signup.css";
import {Link} from "react-router-dom"

const Username = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName ] = useState ('')
  const [lastName, setLastName ] = useState ('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState ('')
  const [address, setAddress] = useState ('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Register = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      

      const res = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/",
        {firstName,lastName,email,password,address,phoneNumber}
      );

      console.log("✅ Response:", res.data);
      

      alert("Registration successful!");
      navigate("/home");
    } catch (err) {
      console.error("❌ Error:", err?.response?.data || err);
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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
        backgroundPosition: "center",
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
        <div className="form">
          <form onSubmit={Register}>
            <h1 style={{ color: "white", marginBottom: "15px" }}>
              {error ? error : "Register Here"}
            </h1>

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

            <input
              type="email"
              placeholder="Enter Email*"
              className="sign-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="Enter Password*"
              className="sign-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

             <input type="text" 
            placeholder="Enter Phonenumber*" 
             className="sign-input"
             value={phoneNumber}
              onChange={(event) =>setPhoneNumber(event.target.value)}
              required
            />
           <br /> <br />

           <input type="text" 
            placeholder="Enter  Address*" 
             className="sign-input"
             value={address}
              onChange={(event) =>setAddress(event.target.value)}
              required
            />
           <br /> <br />


            <button type="submit" className="sign-btn" style={{ borderRadius: "10px" , fontSize:'10px'}}>
              {loading ? <CircularProgress size={24}  /> : "Register"}
            </button>

             Already have an account?
                        
              <Link to ='/' style={{ color: "white",
                fontWeight: 600,
                            textDecoration: "none",}}> Login</Link>
          </form>
        </div>
      </motion.div>
    </Box>
  );
};

export default Username;