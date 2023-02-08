import './App.css';
import {useState} from 'react'
import {fetchWeather} from './api'
import WeatherCard from './components/weatherCard'


function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (event)=>{
    setCity(event.target.value)
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
      const weather = await fetchWeather(city, setError)
      setWeather(weather)
    }catch(error){
      setError("City not found")
    }
  }


  return (
    <div className="App">

<div className="custom-shape-divider-bottom-1675097291">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>

     <h1 className='app_heading'>Weather App</h1>
     <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter City' value={city} onChange={handleChange}></input>
        <button type='submit'>Search</button>
     </form>
     {error ? (
      <p className='error'>{error}</p>
     ) : (
      <WeatherCard weather={weather}/>
     )
     }
    </div>
  );
}

export default App;
