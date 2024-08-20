import './App.css'
import WeatherLayout from './components/WeatherLayout';
import useGetWeather from './hooks/useGetWeather'

function App() {
    return (
    <>
      <div className='weather-container'>
        <WeatherLayout />
      </div>
    </>
  )
}

export default App
