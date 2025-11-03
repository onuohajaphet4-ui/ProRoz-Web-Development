import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [age, setAge] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  

  return (
    <div className="navbar">
      <h2 className="nav-h2">ProRoz</h2>

      <div className="nav">
        <ul className="nav-ul">
         
           
        

          <Box sx={{ minWidth: 120, backgroundColor: "transparent" }}>
            <FormControl
              variant="outlined"
              sx={{
                minWidth: 120,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{ border: "none", color: "white" }}
              >
                Company
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <MenuItem
                    value={30}
                    sx={{ backgroundColor: "coral", color: "white" }}
                  >
                    About
                  </MenuItem>
                </Link>

                <Link to="/con" style={{ textDecoration: "none" }}>
                  <MenuItem
                    value={10}
                    sx={{ backgroundColor: "coral", color: "white" }}
                  >
                    Service
                  </MenuItem>
                </Link>

                <MenuItem
                  value={20}
                  sx={{ backgroundColor: "coral", color: "white" }}
                >
                  Design
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

         
          
          {user ? (
            <span style={{ color: "white", marginLeft: "20px"  ,fontSize:'10px'}}>
              Welcome, <b>{user.firstName}</b> 
            </span>
          ) : (
            <span style={{ color: "white", marginLeft: "20px" ,fontSize:'10px'}}>
              Welcome, Guest
            </span>
          )}

        
           <Link to='/home'>
            <button
              onClick={alert('Logged out successful')}
              style={{
                marginLeft: "20px",
                background: "transparent",
                border: "1px solid white",
                color: "coral",
                borderRadius: "5px",
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
            </Link> 
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;