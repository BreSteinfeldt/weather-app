import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { Typography, Button, TextField, Stack, Box } from "@mui/material";
import ErrorAlert from "./ErrorAlert";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

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
          image: data.weather[0].main,
          temperature: Math.trunc(data.main.temp),
          city: data.name,
        });
      } else {
        console.error("Error fetching weather:", data.message);
        setWeatherError(data.message);
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
      <Typography gutterBottom variant="h4" component="div" color="primary">
        Weather App
      </Typography>
      <Box spacing={2}>
        <TextField
          label="Enter city"
          size="small"
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={(event) => (event.key == "Enter" ? handleSearch() : null)}
        ></TextField>
      </Box>
      <Box>
        <Button variant="contained" p={2} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {weather && <WeatherCard weather={weather} />}
      <ErrorAlert error={weatherError} />
    </Stack>
  );
}

export default Home;
