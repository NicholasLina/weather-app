import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Coordinates, WeatherData } from "../types/types";

/**
 * @function useGetWeather
 * @async
 * @description Get the current weather data at the given location
 * @returns {Promise<Object, boolean>} A Promise containing the weather data and a flag to show when the promise has resolved.
 */
const useGetWeather = (location: Coordinates) => {

    const url = "https://api.nicklina.com/weather/";
    const lat = location.lat;
    const lon = location.lon;

    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({} as WeatherData);
    
    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(url + lat +"-" + lon);
                const json = await response.json();

                console.log(json);
                setWeather(json);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [location.lat, location.lon]);

    return { loading, weather };
}

export default useGetWeather;