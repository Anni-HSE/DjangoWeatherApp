import "./App.css";
import { useEffect, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { theme } from "./theme";
import useFetch from "./components/hooks/useFetch";
import WeathersDisplay from "./components/WeathersDisplay";
import "./css/style.css"
import WeatherContainer from "./components/WeatherContainer";


function App() {
  const [location, setLocation] = useState("");
  const [data, fetchData] = useFetch();
  const [update, setUpdate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
    console.log(data);
    setUpdate(true);
  };

  return (
    <main>
      <div className="container">
        <div className="col-1-3">
            <div className="searchBar">
              <h2 className="headertekst">
                Узнай погоду в городе
              </h2>
              <SearchBar value={location} handleChange={(e) => setLocation(e.target.value)} handleSubmit={handleSubmit} />
            </div>
            <ThemeProvider theme={theme}>
              <WeatherContainer weather={data} variant="subtitle1" />
            </ThemeProvider>
        </div>
        <div className="col-2-3"> 
          <h2>
            Полученные погодные данные
          </h2>
          <WeathersDisplay update={update} />
        </div>
      </div>
      
    </main>
  );
}

export default App;