import { Paper, Typography, Box } from '@mui/material';
import React from 'react';

const User = ({ user }) => {
    console.log(user);
    return (
        <Paper elevation={3}>
            <Paper elevation={2} style={{ margin: "10px 0" }}>
                <Typography textAlign="center" variant='h4' fontWeight={500} style={{ padding: "10px 0" }} color="#009688">
                    User Details
                </Typography>
            </Paper>
            <Box style={{
                display: 'flex', alignItems: 'center', justifyContent:
                    "center",
                padding: '10px 0',
                flexDirection: "column"
            }}>
                <Paper elevation={3} style={{ width: '150px', height: "150px", borderRadius: "50%", overflow: "hidden" }}>
                    <img style={{ maxWidth: "100%" }} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="avatar" />
                </Paper>
                <h3 style={{ color: "#009688", fontWeight: "700", padding: "5px 0" }}>{user?.profile?.username}</h3>
                <Box>
                    <Typography variant="h5" fontWeigt={500} style={{ color: "#009688" }}>
                        {user?.jobTitle}
                    </Typography>
                </Box>
            </Box>
            <Box style={{ padding: '20px' }}>
                <Box style={{ background: "#009688", padding: '0.6rem', borderRadius: "8px" }}>
                    <p style={{ color: "#fff" }}>
                        {user?.Bio}
                    </p>
                </Box>

                <Box style={{ padding: '0.1rem', marginTop: "1rem", borderRadius: "8px" }}>
                    <Typography variant='h6' fontWeight={500} color="#009688">
                        {user?.profile?.firstName} {" "} {user?.profile?.lastName}
                    </Typography>
                </Box>
                <Box style={{ padding: '0.1rem', borderRadius: "8px" }}>
                    <Typography variant='h6' fontWeight={500} color="#009688">
                        {user?.profile?.email}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default User;