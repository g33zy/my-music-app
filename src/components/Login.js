import React from 'react'
import { TextField, Button } from "@mui/material";



export default function Login(props) {
    return (
        
        <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', margin: '5rem', alignItems: 'center', justifyContent: 'center' }}>
            
            <TextField style={{padding: '1rem'}} variant="standard" placeholder='Username*' />
            <TextField style={{padding: '1rem'}} variant="standard" placeholder='Password*'/>
            <Button style={{width: '195px'}} variant="contained" size='large' onClick={ props.handleLogin }>Log In</Button>
        
        
        </div>


    )

    // gridTemplateRows: 'repeat(3, 1fr)'

}



