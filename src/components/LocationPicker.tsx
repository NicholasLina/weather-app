import { FormEvent, useEffect, useState } from "react";
import { useGeoParse } from "../hooks/useGeoParse";
import { Coordinates } from "../types/types"
import useGetLocationFromIP from "../hooks/useGetLocationFromIP";
import { LocationSuggestion } from "../types/types";

interface LocationPickerProps {
    locationCallback: React.Dispatch<React.SetStateAction<Coordinates>>
}

/**
 * @description A component that displays a location input screen
 * @component
 * @param {Object} LocationPickerProps - The component props.
 * @param {function} locationCallback - The setState function for the app location variable.
 * @returns {JSX.Element} The rendered component.
 */

const LocationPicker = ({ locationCallback }: LocationPickerProps) => {

    const [locationInput, setLocationInput] = useState("")
    const [helperText, setHelperText] = useState("")
    const [suggestedLocation, setSuggestedLocation] = useState({} as LocationSuggestion)
    const IPLocation = useGetLocationFromIP();

    useEffect(() => {
        if (IPLocation != undefined) {
            setSuggestedLocation(
                {
                    city: IPLocation.city,
                    country: IPLocation.country,
                    lat: IPLocation.lat,
                    lon: IPLocation.lon
                })
        }
    }, [IPLocation])

    const getLocation = async (e: FormEvent, locationString: string): Promise<void> => {
        e.preventDefault();

        if (locationString == "") {
            setHelperText("Please enter a valid location! Thanks :)");
            return
        }

        let location: Coordinates = await useGeoParse(locationString);

        if (location?.error !== undefined)
            setHelperText("Server Busy! Please try again in a few moments")
        else {
            setHelperText(`Getting weather for ${locationString}`)
            locationCallback(location);
        }
    }

    return (
        <div>
            {
                <form onSubmit={(e) => getLocation(e, locationInput)}>
                    <h1>Enter a location to check the current weather</h1>
                    <input
                        type="text"
                        placeholder="Postal Code or City"
                        onChange={(e) => { setLocationInput(e.target.value) }}>
                    </input>

                    <button
                        onClick={(e) => getLocation(e, locationInput)}>
                        Submit
                    </button>

                    <a 
                        onClick={(e) => getLocation(e, `${suggestedLocation.city}, ${suggestedLocation.country}`)}>
                            Weather in {suggestedLocation.city}, {suggestedLocation.country}</a>
                    <p>{helperText}</p>
                </form>
            }
        </div>
    )
}

export default LocationPicker;