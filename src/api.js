import axios from 'axios'
import env from "react-dotenv";


export  async function fetchWeather(city, setError) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}`
    try{
        let response = await axios.get(url)
        setError("")
        return response.data;
    }catch(error){
        setError('City Not Found')
        return error;
    }
}

export default fetchWeather;