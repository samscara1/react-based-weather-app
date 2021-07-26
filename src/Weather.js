import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { UpcomingWeather } from './UpcomingWeather'

export const Weather = ({city, country, temp, tempMin, tempMax, weather, icon, pressure, humidity, wind, weatherList}) => {
    return (
        <>
        <CurrentWeather 
            city={city}
            country={country}
            temp={temp}
            tempMin={tempMin}
            tempMax={tempMax}
            weather={weather}
            icon={icon}
            pressure={pressure}
            humidity={humidity}
            wind={wind}
        />
        <UpcomingWeather weatherList={weatherList} />
        </>
    )
}