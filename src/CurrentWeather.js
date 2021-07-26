import React from 'react'
import './currentWeather.css'

export const CurrentWeather = ({city, country, temp, tempMin, tempMax, weather, icon, pressure, humidity, wind}) => {

const hpaToMillimetres = (hpa) => {
    const millimetres = Number(hpa) *  0.750062
    return Math.round(millimetres)
}

    return (
        <section className="current-weather">
            <p>Now in {city} <sup className="current-weather__country">{country}</sup> <span className="current-weather__temp">{Math.round(temp)}&#8451;</span></p>
            <div className="current-weather-wrapper">
                <div className="current-weather__left-column">
                    <p>{weather}</p>
                    <img img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather} />
                </div>
                <div className="current-weather__right-column">
                    <p>Today: {Math.round(tempMin)}/{Math.round(tempMax)}&#8451; </p>
                    <p>Pressure: {hpaToMillimetres(pressure)}mm Hg </p>
                    <p>Humidity: {humidity}% </p>
                    <p>Wind speed: {wind.speed}m/s</p>
                </div>
            </div>
        </section>
    )
}
