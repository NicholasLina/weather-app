interface PrecipitationProps {
    precipitation: number,
    humidity: number
}

const Precipitation = ({precipitation, humidity}: PrecipitationProps): JSX.Element => {
    return (
        <div>
            <div>
                <p>Precipitation this hour</p>
                <p><b>{precipitation}mm</b></p>
            </div>

            <div>
                <p>Humidity</p>
                <p><b>{humidity}%</b></p>
            </div>
        </div>
    )
}

export default Precipitation;