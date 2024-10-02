import './App.css'
import { useState } from 'react';
import WeatherLayout from './components/WeatherLayout';
import LocationPicker from './components/LocationPicker';
import { Coordinates } from './types/types';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

/**
 * @description The main App component
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  const [location, setLocation] = useState<Coordinates>({} as Coordinates);

  // EXAMPLE COORDINATES TO USE FOR TESTING (REDUCING API CALLS)
  // const location: Coordinates = {
  //   city: "Niagara Falls, Canada",
  //   lat: 12,
  //   lon: 12,
  //   error: ""
  // } 

  return (
    <BrowserRouter basename="/weather">
      <div id="main">
        {location?.lat === undefined ?
          <LocationPicker locationCallback={setLocation} />
          : <WeatherLayout location={location} />
        }
      </div>
      <Footer />
    </BrowserRouter>
  )
}
