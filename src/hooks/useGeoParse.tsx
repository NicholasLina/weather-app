import { Coordinates } from "../types/types";

/**
 * @function useGeoParse
 * @async
 * @description Get user's city/country lattitude and longitude from a postal code or city name
 * @returns {Promise<Coordinates>} A Promise containing the city/country, lattitude, longitude, and error data.
 */
export const useGeoParse = async (location: string): Promise<Coordinates> => {
    const BASE_URL = "https://api.nicklina.com/location/";
    const url = BASE_URL + location
    const locationData = {} as Coordinates;

    try {
        const response = await fetch(url);
        const locationJSON = await response.json();

        locationData.city = locationJSON.locationString;
        locationData.lat = locationJSON.lat;
        locationData.lon = locationJSON.lon;


    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
    return locationData;
};