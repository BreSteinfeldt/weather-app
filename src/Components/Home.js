import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Stack,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = "7d3a1b7b5e18bc83f8797a44929a02e0";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather({
          description: data.weather[0].description,
          temperature: data.main.temp,
          city: data.name,
        });
      } else {
        console.error("Error fetching weather:", data.message);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather();
    }
  };

  return (
    <Stack spacing={4}>
      <Typography gutterBottom variant="h4" component="div">
        Weather App
      </Typography>
      <Box spacing={2}>
        <TextField
          label="Enter city"
          size="small"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></TextField>
      </Box>
      <Box>
        <Button variant="contained" p={2} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {weather && (
        <Grid container direction="column" alignItems="center" justify="center">
          <Box width="500px" p={4}>
            <Card elevation={4}>
              <CardMedia
                component="img"
                height="175"
                image="https://source.unsplash.com/random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {weather.city}
                </Typography>
                <Typography variant="body1">{weather.description}</Typography>
                <Typography variant="body1">
                  {weather.temperature} °F
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      )}
    </Stack>
  );
}

export default Home;

// <Box width="500px" >
//   <Card elevation={4}>
//     <CardMedia
//       component="img"
//       height="140"
//       image="https://source.unsplash.com/random"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {weather.city}
//       </Typography>
//       <Typography variant="body2">{weather.description}</Typography>
//       <Typography variant="body2">{weather.temperature} °F</Typography>
//     </CardContent>
//   </Card>
// </Box>

// {weather && (
//   <Typography variant="h6">
//     <p>City: {weather.city}</p>
//     <p>Description: {weather.description}</p>
//     <p>Temperature: {weather.temperature} °F</p>
//   </Typography>
// )}
