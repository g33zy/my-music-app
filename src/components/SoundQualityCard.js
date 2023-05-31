import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl/FormControl";
import Select from "@mui/material/Select";

export default function SoundQualityCard(props) {
  const handleQuality = (e) => {
    props.setQuality(e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: "3vh", fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          Sound Quality
        </Typography>

        <Typography sx={{ mb: 1.5, fontSize: "2vh" }} color="text.secondary">
          Manually control music quality in event of poor connection
        </Typography>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
          <div id="select">
            <Select
              style={{ height: "2.3rem", fontSize: "1.2rem" }}
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={props.quality}
              // label="Age"
              onChange={handleQuality}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </div>
        </FormControl>
      </CardContent>
    </Card>
  );
}

//   return (
//     <Card sx={{ maxWidth: 275 }}>
//       <CardContent>
//         <Typography
//           sx={{ fontSize: "3vh", fontWeight: "bold" }}
//           color="text.secondary"
//           gutterBottom
//         >
//           Sound Quality
//         </Typography>

//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           Manually control music quality in event of poor connection
//         </Typography>

//         </CardContent>
//         <CardActions>

//         <FormControl fullWidth>
//           {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
//     Age
//   </InputLabel> */}
//           <NativeSelect
//             defaultValue={2}
//             value={props.quality}
//             onChange={handleQuality}
//           >
//             <option value={1}>Low</option>
//             <option value={2}>Normal</option>
//             <option value={3}>High</option>

//           </NativeSelect>
//         </FormControl>
//       </CardActions>
//     </Card>
//   );
// }
