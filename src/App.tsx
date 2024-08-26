import { useState } from 'react';
import './App.css'
import WeatherLayout from './components/WeatherLayout';
import LocationPicker from './components/LocationPicker';
import { Coordinates } from './types/types';

export default function App() {
    const [location, setLocation] = useState<Coordinates>({} as Coordinates);
    // const location: Coordinates = {
    //   city: "Niagara Falls, Canada",
    //   lat: 12,
    //   lon: 12,
    //   error: ""
    // } 

    return (
    <>
      <div className='weather-container'>
        {location?.lat === undefined ? 
          <LocationPicker locationCallback={ setLocation } />
          :<WeatherLayout location={location} />
        }
      </div>
    </>
  )
}
