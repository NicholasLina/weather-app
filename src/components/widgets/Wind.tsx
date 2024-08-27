import { FaCircleArrowUp } from "react-icons/fa6"
import styles from "../../styles/Wind.module.css"

interface WindProps {
    windSpeed: number,
    windDirection: number
}

/**
 * @description A component that displays information about the wind
 * @component
 * @param {Object} WindProps - The component props.
 * @param {number} windSpeed - Speed of wind in km/h.
 * @param {number} windDirection - Direction of wind in degrees.
 * @returns {JSX.Element} The rendered component.
 */
const Wind = ({ windSpeed, windDirection }: WindProps): JSX.Element => {
    return (
        <div className={styles.main}>
            <div>
                <p className={styles.speedTitle}>Wind Speed:</p>
                <p><b>{getWindSpeedDescriptor(windSpeed)}</b></p>
            </div>
            <FaCircleArrowUp style={{ transform: `rotateZ(${windDirection}deg)`, fontSize: "60px" }} />
            <p><b>{windSpeed}km/h</b></p>
        </div>
    )
}

/**
 * @function getWindSpeedDescriptor
 * @description Get a descriptive term from the wind speed given in km/h using the Beaufort Wind Scale Table
 * @param {number} windSpeed - Wind speed in km/h.
 * @returns {string} The corresponding descriptive term.
 * 
 * https://www.canada.ca/en/environment-climate-change/services/general-marine-weather-information/understanding-forecasts/beaufort-wind-scale-table.html
 */
const getWindSpeedDescriptor = (windSpeed: number): string => {
    if (windSpeed < 1) {
        return "Calm"
    } else if (windSpeed < 6) {
        return "Light Air"
    } else if (windSpeed < 12) {
        return "Light Breeze"
    } else if (windSpeed < 20) {
        return "Gentle Breeze"
    } else if (windSpeed < 29) {
        return "Moderate Breeze"
    } else if (windSpeed < 39) {
        return "Fresh Breeze"
    } else if (windSpeed < 50) {
        return "Near Gale"
    } else if (windSpeed < 62) {
        return "Gale"
    } else if (windSpeed < 75) {
        return "Strong Gale"
    } else if (windSpeed < 89) {
        return "Storm"
    } else if (windSpeed < 103) {
        return "Violent Storm"
    } else if (windSpeed < 118) {
        return "Hurricane"
    }
    return "Error";
}

export default Wind;