import { useState, useEffect } from "react";

/**
 * @deprecated
 * @function useGetLocation
 * @description Get location data using the browser navigator
 * @returns {Promise<Object>} An object containing the latitude and longitude of the user.
 */
const useGetLocation = (): {latitude: number, longitude: number} => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    useEffect(() => {
        const getLocation = async () => {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(success, error);
                } else {
                    console.log("Geolocation not supported");
                }

                function success(position: GeolocationPosition) {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }

                function error() {
                    console.log("Unable to retrieve your location");
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        };

        getLocation();
    }, []);

    return { latitude, longitude };
}

export default useGetLocation;