import React from 'react'
import './upcomingWeather.css'

const secondsToDate = (seconds) => {
    const time = new Date(seconds * 1000)
    const date = time.toString()
    return date.substring(0,10)

}

export const UpcomingWeather = ({weatherList}) => {
    return (
        <ul className="upcoming-weather">
            {weatherList.map(day => {
                if (day.dt_txt.substring(11) === "12:00:00"){
                    return(<li key={day.dt} className="day">
                        <p>{secondsToDate(day.dt)}</p>
                        <p>{<img img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather.description} />}</p>
                        <p>{Math.round(day.main.temp)}</p>
                    </li>)
                }
            })}
        </ul>
    )
}