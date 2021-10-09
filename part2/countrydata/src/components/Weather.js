
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {
    const [weather, setWeather] = useState([])
    //console.log(weather);

      useEffect(() => {
        const params = {
          access_key: process.env.REACT_APP_API_KEY,
          query: props.filters
        }
        axios.get('http://api.weatherstack.com/current', { params })
          .then(response => {
            setWeather(response.data)
          })
      }, [props.filters])
    
    if(weather.length === 0){
        return (
            <p>loanding...</p>
        )
    }
    
    return (
      <>
        <h2>Weather in {weather.location.name}</h2>
        <p><strong>temperature: </strong>{weather.current.temperature} ℃</p>
        <img alt={weather.location.name} src={weather.current.weather_icons}></img>
        <p><strong>wind: </strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </>
    )
}

export default Weather