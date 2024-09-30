import { FaThermometerEmpty, FaThermometerFull, FaThermometerHalf, FaThermometerQuarter, FaThermometerThreeQuarters } from "react-icons/fa"
import styles from "../../styles/Temperature.module.css"

interface TemperatureProps {
    temperature: number,
    apparentTemperature: number,
    temperatureMax: number,
    temperatureMin: number
}

/**
 * @description A component that displays information about the temperature
 * @component
 * @param {Object} TemperatureProps - The component props.
 * @param {number} temperature - The temperature in degrees celsius.
 * @param {number} apparentTemperature - The perceived temperature taking into account wind chill and other factors.
 * @returns {JSX.Element} The rendered component.
 */
const Temperature = ({ temperature, apparentTemperature, temperatureMax, temperatureMin }: TemperatureProps): JSX.Element => {
    return (
        <div>
            <div className={styles.main}>
                <h1>{temperature}°C</h1>
                <TempRangeIcon temperature={temperature} color={getTempRangeColor(temperature)}/>
                <div className={styles.tempRange}>
                    <p><b>{temperatureMax}°C</b></p>
                    <p><b>{temperatureMin}°C</b></p>
                </div>
            </div>
            <div>
                <p>Feels Like:</p>
                <p style={{color: getTempRangeColor(temperature)}}><b>{apparentTemperature}°C</b></p>
            </div>
        </div>
    )
}

/**
 * @function getTempRangeColor
 * @description A function that returns a color that represents a temperature (cold, cool, warm, hot, very hot)
 * @param {number} temperature - The temperature in degrees celsius.
 * @returns {string} The name of the color corresponding to the given temperature.
 */
const getTempRangeColor = (temperature: number): string => {
    if (temperature <= 0) {             // cold
        return "blue";
    } else if (temperature < 10) {      // cool
        return "lightblue";
    } else if (temperature < 20) {      // warm
        return "white";
    } else if (temperature < 30) {      // hot
        return "orange";
    } else {                            // very hot
        return "red";
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
const TempRangeIcon = ({ temperature, color }: TemperatureRangeIconProps): JSX.Element => {
    let style = { color: color }

    if (temperature <= 0) {         // cold
        return <FaThermometerEmpty style={style} />
    } else if (temperature < 10) {  // cool
        return <FaThermometerQuarter style={style} />
    } else if (temperature < 20) {  // warm
        return <FaThermometerHalf style={style} />
    } else if (temperature < 30) {  // hot
        return <FaThermometerThreeQuarters style={style} />
    } else {                        // very hot
        return <FaThermometerFull style={style} />
    }
}

export default Temperature;