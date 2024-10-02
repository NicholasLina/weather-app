import { getTempRangeColor } from "../../util/TempRangeInterpreter"
import styles from "../../styles/Temperature.module.css"

interface TemperatureProps {
    temperature: number,
    apparentTemperature: number,
    temperatureMax: number,
    temperatureMin: number,
    gridAreaName: string
}

/**
 * @description A component that displays information about the temperature
 * @component
 * @param {Object} TemperatureProps - The component props.
 * @param {number} temperature - The temperature in degrees celsius.
 * @param {number} apparentTemperature - The perceived temperature taking into account wind chill and other factors.
 * @returns {JSX.Element} The rendered component.
 */
const Temperature = ({ temperature, apparentTemperature, temperatureMax, temperatureMin, gridAreaName }: TemperatureProps): JSX.Element => {
    return (
        <div style={{gridArea: gridAreaName}}>
            <div className={styles.main}>
                {/* <TempRangeIcon temperature={temperature} color={getTempRangeColor(temperature)}/> */}
                <h1 style={{color: getTempRangeColor(temperature)}}>{temperature}°C</h1>
                <div className={styles.tempRange}>
                    <p>High: <b style={{color: getTempRangeColor(temperatureMax)}}>{temperatureMax}°C</b></p>
                    <p>Low: <b style={{color: getTempRangeColor(temperatureMin)}}>{temperatureMin}°C</b></p>
                </div>
            </div>
            <div>
                <p>Feels Like:</p>
                <p style={{color: getTempRangeColor(apparentTemperature)}}><b>{apparentTemperature}°C</b></p>
            </div>
        </div>
    )
}

export default Temperature;