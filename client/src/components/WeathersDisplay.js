import React, {useEffect, useState} from "react";
import WeatherTable from "./WeatherTable";

const WeathersDisplay = (update) => {

    const [weathers, setWeathers] = useState();

    useEffect(() => {
        const fetchWeathers = async () => {
            fetch("http://localhost:8000/weathers/")
                .then((res) => res.json())
                .then((data) => {console.log(data); setWeathers(data)})
                .catch((err) => console.log(err));
            update = false
        };
        fetchWeathers(); 
    }, [update]);
    
    return <WeatherTable weathers={weathers}/>
};

export default WeathersDisplay;