import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import './Search.css'
import { useState } from "react"
import { Alert } from "@mui/material"


export default function Search({ updateWeather }) {
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "ad15e850ae81eb8da4872e51e17c91e8";
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    let handleChange = (event) => {
        setCity(event.target.value);
    }


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let information = await getWeather();
            console.log(information);
            updateWeather(information);
        }
        catch (err) {
            seterror(true);
        }
    }


    let getWeather = async () => {
        try {
            let result = await fetch(`${weatherURL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResult = await result.json();
            let weatherInfo = {
                name: jsonResult.name,
                temp: jsonResult.main.temp,
                pressure: jsonResult.main.pressure,
                humidity: jsonResult.main.humidity,
                windD: jsonResult.wind.deg,
                windS: jsonResult.wind.speed,
                feelsLike: jsonResult.main.feels_like,
                description: jsonResult.weather[0].description,
            }
            return weatherInfo;
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search">
                <div className="s1">
                <TextField variant="outlined" onChange={handleChange} value={city} size="small" name="city" id="city" label="City Name" ></TextField>
                <br />
                <br />
                <Button style={{ marginLeft: "5px", backgroundColor: "#366181" }} type="submit" variant="contained" startIcon={<SearchIcon />}>Search</Button>
                </div>
                <div  className="s2">
                {error &&  <Alert severity="info">No Data is Available for this Place</Alert>}
                </div>
            </div>
        </form>
    );
}