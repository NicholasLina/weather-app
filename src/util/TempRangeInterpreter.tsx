import { FaThermometerEmpty, FaThermometerFull, FaThermometerHalf, FaThermometerQuarter, FaThermometerThreeQuarters } from "react-icons/fa"

/**
 * @function getTempRangeColor
 * @description A function that returns a color that represents a temperature (cold, cool, warm, hot, very hot)
 * @param {number} temperature - The temperature in degrees celsius.
 * @returns {string} The name of the color corresponding to the given temperature.
 */
export const getTempRangeColor = (temperature: number): string => {
    if (temperature <= 13) {             // cold
        return "#87f3ff";
    } else if (temperature < 24) {      // cool
        return "#fffda4";
    } else if (temperature < 30) {      // warm
        return "#fdc150";
    } else if (temperature < 40) {      // hot
        return "#ff903f";
    } else {                            // very hot
        return "#ff3f3f";
    }
}

interface TemperatureRangeIconProps {
    temperature: number,
    color: string
}

/**
 * @function TempRangeIcon
 * @description A function that returns a thermometer icon that represents a temperature (cold, cool, warm, hot, very hot)
 * @param {number} temperature - The temperature in degrees celsius.
 * @returns {JSX.Element} The react-icon component that corresponds to the given temperature.
 */
export const TempRangeIcon = ({ temperature, color }: TemperatureRangeIconProps): JSX.Element => {
    let style = { color: color }

    if (temperature <= 10) {         // cold
        return <FaThermometerEmpty style={style} />
    } else if (temperature < 20) {  // cool
        return <FaThermometerQuarter style={style} />
    } else if (temperature < 30) {  // warm
        return <FaThermometerHalf style={style} />
    } else if (temperature < 40) {  // hot
        return <FaThermometerThreeQuarters style={style} />
    } else {                        // very hot
        return <FaThermometerFull style={style} />
    }
}