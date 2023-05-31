import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch'



export default function OnlineModeCard(props) {


  const handleToggle = () => {
    props.setToggle(!props.toggle)
  }


  return (
    <Card sx={{ maxWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: '3vh', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        Online Mode
      </Typography>
      
      <Typography sx={{ mb: 1.5, fontSize: '2vh' }} color="text.secondary">
        Is this application connected to the internet?
      </Typography>
      <Switch onChange={handleToggle} defaultChecked />
    </CardContent>
  </Card>
  );
}