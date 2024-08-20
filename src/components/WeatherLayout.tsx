import useGetWeather from '../hooks/useGetWeather'
import { WMOInterpreter } from '../util/WMOInterpreter';
import { FaCircleArrowUp } from "react-icons/fa6";

export default function WeatherLayout() {
    const {loading, weather} = useGetWeather();
    return(
        <div>
            <h1>{weather.temperature2m}°C</h1>
            <p className='title'>Feels Like:</p>
            <p>{weather.apparentTemperature}°C</p>

            <h2>{WMOInterpreter(weather.weatherCode)}</h2>

            <p className='title'>Humidity</p>
            <p>{weather.relativeHumidity2m}</p>

            <p className='title'>Wind</p>
            <FaCircleArrowUp style={{transform: `rotateZ(${weather.windDirection10m}deg)`, fontSize: "60px"}}/>
            <p>{weather.windSpeed10m}km/h</p>

            <p className='title'>Precipitation</p>
            <p>{weather.precipitation}</p>

            <p className='title'>Cloud Cover</p>
            <p>{weather.cloudCover}</p>

            {loading ? "loading" : ""}
        </div>
    )
}