import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Users from './components/Users';
import { Container, Grid, Paper, Typography } from '@mui/material';
import User from './components/User';


const App = () => {
  const [displayUser, setDisplayUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
      if (response?.statusText === "OK") {
        setUsers(response?.data);
        setDisplayUser(response?.data[0]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrors(error?.message);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(isLoading, users);
  return (
    <div style={{ padding: '20px' }}>
      <div>
        {isLoading && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      {
        users && !errors && <Container maxWidth="lg" style={{
          marginTop:
            "40px"
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Paper elevation={3} style={{ background: "#009688", padding: "8px 15px" }}>
                <Typography variant='h4' fontWeight={500} color="#fff">
                  User List
                </Typography>
              </Paper>
              <Box style={{ marginTop: '20px' }}>
                {users.map((user, index) => {
                  return <Users key={index} user={user}
                    setDisplayUser={setDisplayUser}
                    displayUser={displayUser}
                  />
                })}
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <User user={displayUser} />
            </Grid>
          </Grid>
        </Container>
      }
      {
        errors && <Typography variant='h4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }} fontWeight={500} color="#009688" textAlign="center">
          {errors}
        </Typography>
      }
    </div >
  );
};

export default App;