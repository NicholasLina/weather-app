import { useState } from "react";

const BASE_URL = "https://geocode.xyz/?locate=";
const DATA_TYPE = "&json=1";

export const useGeoParse = async (location: string) => {
    const url = BASE_URL + location + DATA_TYPE

    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        if(json.error) {
            return {error: "Location not found. Please try again."}
        }
        else if(json.latt.includes("Throttled")) {
            return {error: "Server Busy! Try again in a couple minutes."}
        }
        else {
            return json;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
};