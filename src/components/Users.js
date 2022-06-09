import { Box, Paper } from '@mui/material';
import React from 'react';

const Users = ({ user, setDisplayUser, displayUser }) => {
    // const  = displayUser?.profile?.email === user?.profile?.email 
    const cardStyle = {
        padding: "10px 20px", display: "flex", alignItems: "center", gap: "20px", marginTop: "15px", cursor: "pointer",
        background: user?.profile?.email.includes(displayUser?.profile?.email) && "#009688"
    }

    return (
        <Paper onClick={() => setDisplayUser(user)}
            elevation={3} style={cardStyle}>
            <Paper elevation={3} style={{ width: '100px', height: "100px", borderRadius: "50%", overflow: "hidden" }}>
                <img style={{ maxWidth: "100%" }} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="avatar" />
            </Paper>
            <Box>
                <h3 style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: user?.profile?.email.includes(displayUser?.profile?.email) ? "#fff" : "#009688"
                }}>{user?.profile?.firstName} {" "} {user?.profile?.lastName}</h3>
                <p
                    style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        paddingTop: '0.5rem',
                        color: user?.profile?.email.includes(displayUser?.profile?.email) ? "#fff" : "#009688"
                    }}
                >{user?.profile?.email}</p>
            </Box>
        </Paper >
    );
};

export default Users;