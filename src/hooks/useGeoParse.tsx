import { Coordinates } from "../types/types";

const BASE_URL = "https://geocode.xyz/?locate=";
const DATA_TYPE = "&json=1";

export const useGeoParse = async (location: string): Promise<Coordinates> => {
    const url = BASE_URL + location + DATA_TYPE
    const locationData = {} as Coordinates;

    try {
        const response = await fetch(url);
        const json = await response.json();

        if(json.error) {
            locationData.error = "Location not found. Please try again."
        }
        else if(json.latt.includes("Throttled")) {
            locationData.error = "Server Busy! Try again in a couple minutes."
        }
        else {
            console.log(json);
            locationData.city = `${json.standard.city}, ${json.standard.countryname}`;
            locationData.lat = json.latt;
            locationData.lon = json.longt;
        }

        
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }

    return locationData;
};