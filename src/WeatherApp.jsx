import { green } from "@mui/material/colors";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState ({
            city: "Wonderland",
            feelslike:24.84,
            temp:25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            Weather:"haze",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2 style= {{color: "green"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}