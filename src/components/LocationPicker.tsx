import { useState } from "react";
import { useGeoParse } from "../hooks/useGeoParse";
import { Coordinates } from "../types/types"
import Footer from "./Footer";

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
    const getLocation = async (locationString: string): Promise<void> => {
        let location: Coordinates = await useGeoParse(locationString);

        if (location?.error !== undefined)
            setHelperText("Server Busy! Please try again in a few moments")
        else {
            setHelperText(`Getting weather for ${locationString}`)
            locationCallback(location);
        }
    }

    const [locationInput, setLocationInput] = useState("")
    const [helperText, setHelperText] = useState("")

    return (
        <div>
            {
                // location.loaded ? 
                <>
                    <h1>Enter a location to check the current weather</h1>
                    <input type="text" placeholder="Postal Code or City" onChange={(e) => { setLocationInput(e.target.value) }}></input>
                    <br></br>
                    <button onClick={ () => getLocation(locationInput) }>Submit</button>
                    <p>{helperText}</p>
                </> 
                // : <LoadingSpinner />
            }

            <Footer />
        </div>
    )
}

export default LocationPicker;