import React, { useState } from 'react';

const WeatherDashboard = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Ulaanbaatar');

    const fetchWeatherData = async (cityName) => {
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeatherData(city);
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'red', padding: '20px', borderRadius: '10px' }}>
            <h1>Цаг агаарын мэдээлэл</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder="Хотын нэр" 
                    style={{ marginRight: '10px' }}
                />
                <button type="submit">Хайх</button>
            </form>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Температур: {weather.main.temp} °C</p>
                    <p>Чийгшил: {weather.main.humidity}%</p>
                    <p>Салхи: {weather.wind.speed} м/с</p>
                    <p>Даралт: {weather.main.pressure} гПа</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDashboard;
