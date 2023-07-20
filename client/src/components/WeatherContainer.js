import { Box, Typography, Container } from "@mui/material";

export default function WeatherContainer({ weather, variant }) {
  return (
    <Box marginBottom={2}>
      <Container>
        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            City: &ensp;
          </Box>
          <Box fontWeight="fontWeightNormal" display="inline">
            {weather.city_name} 
          </Box>

        </Typography>

        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            Current Temperature: &ensp;
          </Box>
          <Box fontWeight="fontWeightNormal" display="inline">
            {weather.temp} °C
          </Box>

        </Typography>

        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            Current wind speed: &ensp;
          </Box>
          <Box fontWeight="fontWeightNormal" display="inline">
            {weather.wind_speed} m/s
          </Box>

        </Typography>   

        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            Current weather: &ensp;
          </Box>
          <Box fontWeight="fontWeightNormal" display="inline">
            {weather.weather_description}
          </Box>

        </Typography>

        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            Receipt time: &ensp;
          </Box>
          <Box fontWeight="fontWeightNormal" display="inline">
            {weather.requst_date}
          </Box>
        </Typography>
        
      </Container>
    </Box>
  );
}