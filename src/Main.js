import React, {useState, useEffect} from 'react'
import {Weather} from './Weather'
import  './main.css'

const apiKey = '4d4d51739311ae065192a67b19bde910'
export const Main = () => {
    const [city, setCity] = useState('')
    const [weatherInfo, setWeatherInfo] = useState({})
    const [isCityFetched, setIsCityFetched] = useState(false)

    const handleCityInput = (evt) => {
        setCity(evt.target.value)
    }

    const fetchCity = async (city) => {
        setIsCityFetched(false)
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},&appid=${apiKey}&units=metric`)
          const weather = await response.json()
          if (!response.ok){
            throw "Enter correct city" 
          }
          setWeatherInfo(weather)
          setIsCityFetched(true)
        } catch (error) {
          document.querySelector('.information-string').innerHTML = error
          setTimeout(() => (document.querySelector('.information-string').innerHTML = ""), 2000)
        }
        setCity("")
      }

      const handleEnter = (evt) => {
        if (evt.code === "Enter") {
          fetchCity(city)
        }
      }

    return (
        <div className="wrapper">
            <section className="search-form">
              <input type="text" onChange={handleCityInput} onKeyDown={handleEnter} value={city} placeholder="Search for a city" className="search-form__input" />
              <input type="submit" value="search" onClick={()=>fetchCity(city)} className="search-form__submit" />
            </section>

            <section className="weather-info">{
              isCityFetched 
              ? <Weather 
                city={weatherInfo.city.name} 
                country={weatherInfo.city.country} 
                temp={weatherInfo.list[0].main.temp}
                tempMin={weatherInfo.list[0].main.temp_min}
                tempMax={weatherInfo.list[0].main.temp_max}
                weather={weatherInfo.list[0].weather[0].description}
                icon={weatherInfo.list[0].weather[0].icon}
                pressure={weatherInfo.list[0].main.pressure}
                humidity={weatherInfo.list[0].main.humidity}
                wind={weatherInfo.list[0].wind}
                weatherList={weatherInfo.list}
                className="weather"
                /> 
              : <p className="information-string" ></p>
            }</section>
        </div>
    )
}

