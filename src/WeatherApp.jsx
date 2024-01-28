import Search from "./Search";
import Info from "./Info";
import { useState } from "react";

export default function WeatherApp() {
    let [weather, setWeather] = useState({
        description: "scattered clouds",
        feelsLike: 27.96,
        humidity: 28,
        name: "Medina",
        pressure: 1012,
        temp: 29.24,
        windD: 260,
        windS: 7.72,
    });
    let updateWeather = async (information) => {
        console.log(information);
        setWeather(information);
    }
    return (<div>
        <h2 style={{ textAlign: "center", color: "#366181", letterSpacing: "12px" }}>WEATHER </h2>
        <Search updateWeather={updateWeather} />
        <Info info={weather} />
    </div>);
}