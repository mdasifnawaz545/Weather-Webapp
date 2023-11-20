import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnit from '@mui/icons-material/AcUnit';
import Flare from '@mui/icons-material/Flare';
import Thunderstorm from '@mui/icons-material/Thunderstorm';
import './Info.css';


export default function Info({info}) {
    let summer_img="https://images.unsplash.com/photo-1610053012491-24cf866090c5?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let winter_img="https://plus.unsplash.com/premium_photo-1671987556132-313d34dfa559?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_img="https://images.unsplash.com/photo-1518803194621-27188ba362c9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="infobox">
            <br />
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    component="img"
                    height="140"
                    image={info.humidity>80?rain_img:info.temp>25?summer_img:winter_img}
                    alt="green iguana"
                />
                <CardContent className='cardItem'>
                    <Typography gutterBottom variant="h5" component="div">
                        <span>
                    {info.name}&nbsp;&nbsp;{info.humidity>80?<Thunderstorm/>:info.temp>25?<Flare/>:<AcUnit/>}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Pressure : {info.pressure}</p>
                        <p>Wind Speed : {info.windS}</p>
                        <p>Direction : {info.windD}</p>
                        <p>The Weather is of <b>{info.description}</b> type and It feels like {info.feelsLike}</p>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}