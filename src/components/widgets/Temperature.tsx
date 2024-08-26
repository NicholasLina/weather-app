import { FaThermometerEmpty, FaThermometerFull, FaThermometerHalf, FaThermometerQuarter, FaThermometerThreeQuarters } from "react-icons/fa"
import styles from "../../styles/Temperature.module.css"

interface TemperatureProps {
    temperature: number,
    apparentTemperature: number
}

const Temperature = ({ temperature, apparentTemperature }: TemperatureProps): JSX.Element => {
    return (
        <div>
            <div className={styles.main}>
                <h1>{temperature}°C</h1>
                <TempRangeIcon temperature={temperature} color={getTempRangeColor(temperature)}/>
            </div>
            <div>
                <p>Feels Like:</p>
                <p style={{color: getTempRangeColor(temperature)}}><b>{apparentTemperature}°C</b></p>
            </div>
        </div>
    )
}

const getTempRangeColor = (temperature: number): string => {
    if (temperature <= 0) {
        return "blue";
    } else if (temperature < 10) {
        return "lightblue";
    } else if (temperature < 20) {
        return "white";
    } else if (temperature < 30) {
        return "orange";
    } else {
        return "red";
    }
}

interface TemperatureRangeIconProps {
    temperature: number,
    color: string
}

const TempRangeIcon = ({ temperature, color }: TemperatureRangeIconProps): JSX.Element => {
    let style = { color: color }
    if (temperature <= 0) {
        return <FaThermometerEmpty style={style} />
    } else if (temperature < 10) {
        return <FaThermometerQuarter style={style} />
    } else if (temperature < 20) {
        return <FaThermometerHalf style={style} />
    } else if (temperature < 30) {
        return <FaThermometerThreeQuarters style={style} />
    } else {
        return <FaThermometerFull style={style} />
    }
}

export default Temperature;