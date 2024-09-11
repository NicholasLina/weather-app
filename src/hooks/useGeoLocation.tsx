import { useState, useEffect } from "react";

type Location = {
    loaded: boolean,
    coordinates?: {
        lat: number,
        lon: number,
    },
    error?: Error
}

type Error = {
    code: number,
    message: string
}

const useGeoLocation = () => {
    const [location, setLocation] = useState({} as Location);

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lon: location.coords.longitude,
            },
        });
    };

    const onError = (error: Error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported on your browser",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeoLocation;