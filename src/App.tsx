import { useEffect, useState } from 'react';
import './App.css'
import WeatherLayout from './components/WeatherLayout';
import useGetWeather from './hooks/useGetWeather'
import LocationPicker from './components/LocationPicker';

export default function App() {
    const [location, setLocation] = useState(null);

    return (
    <>
      <div className='weather-container'>
        <LocationPicker />
        {/* <WeatherLayout /> */}
      </div>
    </>
  )
}