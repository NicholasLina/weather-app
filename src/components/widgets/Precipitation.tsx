import { WMOToText, WMOToIcon } from "../../util/WMOInterpreter"

interface PrecipitationProps {
    weatherCode: number,
    cloudCover: number
    precipitation: number,
    humidity: number,
    gridAreaName: string
}

/**
 * @description A component that displays information about precipitation
 * @component
 * @param {Object} PrecipitationProps - The component props.
 * @param {number} precipitation - Amount of precipitation this hour in mm.
 * @param {number} humidity - Relative humidity as a percentage.
 * @returns {JSX.Element} The rendered component.
 */
const Precipitation = ({weatherCode, cloudCover, precipitation, humidity, gridAreaName}: PrecipitationProps): JSX.Element => {
    return (
        <div style={{gridArea: gridAreaName}} id="precipitation">
            <WMOToIcon weatherCode={weatherCode} />
            <div>
                <h2>{WMOToText(weatherCode)}</h2>
                <p>{cloudCover}% Cloud Coverage</p>
            </div>
            <div>
                <p>Precipitation</p>
                <h3>{precipitation}mm</h3>
            </div>

            <div>
                <p>Humidity</p>
                <p><b>{humidity}%</b></p>
            </div>
        </div>
    )
}

export default Precipitation;