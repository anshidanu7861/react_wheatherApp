import React from "react";

 

const weatherCard = ({weather}) =>{
    return (
        <div className="weather-card">

            
            
            <div className="card-header">
                <div>
                    <p className="weather-city">
                        {weather ? (weather.name + " " + weather.sys.country) : "-"}
                    </p>
                    <p className="weather-description">
                        {weather ? (weather.weather[0].description) : "-"}
                    </p>
                </div>
                <img className={'weather-icon'} src={`icons/${weather ? (weather.weather[0].icon):"unknown"}.png`} alt={'weather'} />

            </div>
            <div className="card-body">
                <h2 className="weather-temp">
                    {weather ? Math.round(weather.main?.temp - 273.15) :'-'}°C
                </h2>
                <div className="weather-details">
                    <div className="parameters">
                        <span className="params-label">Feel Like:</span>
                        <span className="param-val">
                            {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : '-'}C
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Humidity</span>
                        <span className="param-val">
                            {weather ? (weather.main?.humidity) : '-'} %
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Humidity: </span>
                        <span className="param-val">
                            {weather ? (weather.main?.pressure) : '-'} hps
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default weatherCard