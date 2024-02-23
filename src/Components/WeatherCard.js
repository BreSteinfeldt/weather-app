import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import clear from "../images/clear.jpg";
import clouds from "../images/clouds.jpg";
import fog from "../images/fog.jpg";
import mist from "../images/mist.jpg";
import rain from "../images/rain.jpg";
import snow from "../images/snow.jpg";
import thunderstorm from "../images/thunderstorm.jpg";
import defaultImg from "../images/clouds.jpg";
import haze from "../images/haze.jpg";

function WeatherCard({ weather }) {
  const imageDescription = weather.image;
  let image;

  switch (imageDescription) {
    case "Clear":
      image = clear;
      break;
    case "Clouds":
      image = clouds;
      break;
    case "Fog":
      image = fog;
      break;
    case "Haze":
      image = haze;
      break;
    case "Mist":
      image = mist;
      break;
    case "Rain":
      image = rain;
      break;
    case "Snow":
      image = snow;
      break;
    case "Thunderstorm":
      image = thunderstorm;
      break;
    default:
      image = defaultImg;
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box width="450px" p={4}>
        <Card elevation={4}>
          <CardMedia component="img" height="175" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weather.city}
            </Typography>
            <Typography variant="body1">{weather.description}</Typography>
            <Typography variant="body1">{weather.temperature} °F</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}

export default WeatherCard;
