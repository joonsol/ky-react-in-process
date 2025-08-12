import React from 'react'
import './WeatherCard.css'
const WeatherCard = () => {
    return (
        <div className='card'>
            <h2>서울</h2>
            <div className="img-wrap">
                <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="icon" />

            </div>
            <p>구름 조금</p>
            <p>🌡️ 28℃</p>
            <p>💧 69%</p>

        </div>
    )
}

export default WeatherCard