import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import img from '../assets/download.jpeg'
import Nav from '../Component/Nav'
import './Form.css'



const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState ([])
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState ('')
  const api = 'https://students-learning-api.onrender.com/api/auth'
  useEffect(() =>{
    const fetchUsers = async () =>{
      try {
        setLoading(true)
        const res = await
        axios.get(api)
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setLoading (false)
      }
    }
    fetchUsers()
  

}, [])

 const deleteUser = async (_id) =>{
   const confirm = window.confirm('Are you sure want to delete this user?')
   if (!confirm) return;
   
   try {
      await axios.delete (`https://students-learning-api.onrender.com/api/auth/${_id}`)
   } catch (error) {
    console.error(error)
    alert ('Failed to delete user')
    
   }
  reload = window.reload

 }

//  (loading && <CircularProgress/>)
if (loading) return <CircularProgress  sx={{
     padding : '15% 50%'
}}  /> 
  

  return (
    <div style={{ backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",}}>
        <Nav/>
    <Paper sx={{  mt: 4 , backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",}}>
        
      <Typography variant="h5" gutterBottom fontWeight="bold" style={{textAlign: 'center'}}>
        All Registered Student
      </Typography>

      <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                       className="edit"
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        className="view"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
  );
};

export default UsersList;