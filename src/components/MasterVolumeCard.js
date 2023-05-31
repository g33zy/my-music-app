import * as React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    // MenuIcon,
    TextField,
    Card,
    CardActions,
    CardContent,
    Slider
  } from "@mui/material";

  import {Menu as MenuIcon } from '@mui/icons-material'




export default function MasterVolumeCard(props) {

  const handleSlide = (e) => {
    props.setSlide(e.target.value)
  }



  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: '3vh', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
          Master Volume
        </Typography>
    
        <Typography sx={{ mb: 1.5, fontSize: '2vh' }} color="text.secondary">
          Overides all other sound settings in this application
        </Typography>
        
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Slider style={{marginLeft: '.5rem', marginRight: '.5rem' }}
          value={props.slide}
          // aria-label="Temperature"
          defaultValue={20}
          // getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          onChange={handleSlide}
        />
      </CardActions>
    </Card>
  );
}