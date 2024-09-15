import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
 

export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1703018894827-96c5e0049541?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  const HOT_URL ="https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL ="https://images.unsplash.com/photo-1536598315365-c7bae6fd4328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";
  
    return (
    <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity > 92
          ? RAIN_URL 
          : info.temp>16 
          ? HOT_URL 
          : COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temprature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}&deg;C</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.Weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  </div>
    );
}