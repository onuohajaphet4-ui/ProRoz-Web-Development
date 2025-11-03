import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../assets/download.jpeg";
import "./Username.css";

const Username = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Create = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const personalData = JSON.parse(localStorage.getItem("personalData")) || {};

      const fullData = {
        ...personalData,
        email,
        password,
      };

      console.log(" Payload being sent:", fullData);

      const res = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/",
        fullData
      );

      console.log("  Response:", res.data);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Registration successful!");
      navigate("/home");
    } catch (err) {
      console.error(" Error:", err?.response?.data || err);
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
        <div className="rform">
          <form onSubmit={Create}>
            <h1 style={{ color: "white", marginBottom: "15px" }}>
              {error ? error : "Register Here"}
            </h1>

            <input
              type="email"
              placeholder="Enter Username*"
              className="sign-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="Create Password*"
              className="sign-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <button type="submit" className="sign-btn" style={{ borderRadius: "10px" , fontSize:'10px'}}>
              {loading ? <CircularProgress size={24}  /> : "Sign Up"}
            </button>
          </form>
        </div>
      </motion.div>
    </Box>
  );
};

export default Username;