import useGetWeather from '../hooks/useGetWeather'
import { Coordinates } from '../types/types';
import { FaLocationCrosshairs } from "react-icons/fa6";
import styles from "../styles/Weather.module.css"
import Sky from './widgets/Sky'
import Temperature from './widgets/Temperature';
import Wind from './widgets/Wind';
import Precipitation from './widgets/Precipitation';


type SetPropsType = {
    location: Coordinates
}

export default function WeatherLayout({ location }: SetPropsType) {
    const {loading, weather} = useGetWeather(location);
    // const loading = false;
    // const weather = {
    //     weatherCode: 0,
    //     temperature2m: 30,
    //     apparentTemperature: 30,
    //     relativeHumidity2m: 35,
    //     windDirection10m: 210,
    //     windSpeed10m: 6,
    //     precipitation: 0,
    //     cloudCover: 14
    // }

    return (
        <>
            <div className={styles.title}>
                <p>Current weather in</p>
                <h2><FaLocationCrosshairs /> {location.city}</h2>
            </div>

            <div className={styles.container}>
                <Sky weatherCode={weather.weatherCode} cloudCover={weather.cloudCover} />

                <Temperature temperature={weather.temperature2m} apparentTemperature={weather.apparentTemperature} />

                <Precipitation precipitation={weather.precipitation} humidity={weather.relativeHumidity2m} />

                <Wind windSpeed={weather.windSpeed10m} windDirection={weather.windDirection10m} />

                {/* display loading spinner while waiting for weather promise */}
                {loading ? "loading" : ""}

            </div>

            <p style={{color: "gray", fontSize: "12px"}}>Powered By: <a href="https://open-meteo.com/">Open-Meteo</a> and <a href="https://geocode.xyz/">Geocode.xyz</a></p>
        </>
    )
}