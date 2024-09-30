interface PrecipitationProps {
    precipitation: number,
    humidity: number
}

/**
 * @description A component that displays information about precipitation
 * @component
 * @param {Object} PrecipitationProps - The component props.
 * @param {number} precipitation - Amount of precipitation this hour in mm.
 * @param {number} humidity - Relative humidity as a percentage.
 * @returns {JSX.Element} The rendered component.
 */
const Precipitation = ({precipitation, humidity}: PrecipitationProps): JSX.Element => {
    return (
        <div>
            <div>
                <p>Precipitation Today</p>
                <p><b>{precipitation.toFixed(1)}mm</b></p>
            </div>

            <div>
                <p>Humidity</p>
                <p><b>{humidity}%</b></p>
            </div>
        </div>
    )
}

export default Precipitation;