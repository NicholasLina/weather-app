import { useState, useEffect } from "react";
import { fetchWeatherApi } from 'openmeteo';
import toast from "react-hot-toast";
import useGetLocation from "./useGetLocation";


const useGetWeather = () => {
    
    const { latitude, longitude } = useGetLocation();

    const params = {
        "latitude": latitude,
        "longitude": longitude,
        "current": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "weather_code", "cloud_cover", "wind_speed_10m", "wind_direction_10m"],
        "timeformat": "unixtime"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const unsetData = {
        time: new Date(),
        temperature2m: 0,
        relativeHumidity2m: 0,
        apparentTemperature: 0,
        isDay: 0,
        precipitation: 0,
        weatherCode: 0,
        cloudCover: 0,
        windSpeed10m: 0,
        windDirection10m: 0,
    }

    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(unsetData);
    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            try {
                const responses = await fetchWeatherApi(url, params);

                // Process first location. Add a for-loop for multiple locations or weather models
                const response = responses[0];

                // Attributes for timezone and location
                const utcOffsetSeconds = response.utcOffsetSeconds();

                const current = response.current()!;

                // Note: The order of weather variables in the URL query and the indices below need to match!
                const weatherData = {
                    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                    temperature2m: Math.round(current.variables(0)!.value()),
                    relativeHumidity2m: current.variables(1)!.value(),
                    apparentTemperature: Math.round(current.variables(2)!.value()),
                    isDay: current.variables(3)!.value(),
                    precipitation: current.variables(4)!.value(),
                    weatherCode: current.variables(5)!.value(),
                    cloudCover: current.variables(6)!.value(),
                    windSpeed10m: Math.round(current.variables(7)!.value()),
                    windDirection10m: current.variables(8)!.value(),
                };

                setWeather(weatherData);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [latitude, longitude]);

    return { loading, weather };
}

export default useGetWeather;