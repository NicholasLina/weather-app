import { useState } from "react";
import { useGeoParse } from "../hooks/useGeoParse";

export default function LocationPicker() {
    const defaultLocation = {
        latt: "",
        longt: "",
        error: ""
    }

    const [locationInput, setLocationInput] = useState("");
    const [location, setLocation] = useState(defaultLocation);

    return(
        <div>
            <input type="text" placeholder="Postal Code or City" onChange={(e) => {setLocationInput(e.target.value)}}></input>
            <button onClick={async () => setLocation(await useGeoParse(locationInput))}>Submit</button>
            <p>{location.error ? location.error : `Lat: ${location.latt} | Lon: ${location.longt}`}</p>
        </div>
    )
}