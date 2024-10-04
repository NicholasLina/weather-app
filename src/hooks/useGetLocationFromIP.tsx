import { useState, useEffect } from "react";
import { LocationSuggestion } from "../types/types";
/**
 * @function useGetLocationFromIP
 * @async
 * @description Gets the client IP address
 * @returns {Promise<Object, boolean>} A Promise containing the IP address
 */
const useGetLocationFromIP = () => {

    const [IPlocation, setIPLocation] = useState({} as LocationSuggestion);
    
    useEffect(() => {
        const getWeather = async () => {
            try {
                const responseIP = await fetch("https://api.ipify.org/?format=json");
                const jsonIP = await responseIP.json();

                const responseLocation = await fetch("http://ip-api.com/json/" + jsonIP.ip);
                const jsonLocation = await responseLocation.json();

                const suggestedLocation = {
                    city: jsonLocation.city,
                    country: jsonLocation.country,
                    lat: jsonLocation.lat,
                    lon: jsonLocation.lon
                }

                setIPLocation(suggestedLocation);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        };

        getWeather();
    }, []);

    return IPlocation;
}

export default useGetLocationFromIP;