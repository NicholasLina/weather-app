import { WMOToText, WMOToIcon } from "../../util/WMOInterpreter"
import styles from "../../styles/Sky.module.css"

interface SkyProps {
    weatherCode: number,
    cloudCover: number
}

/**
 * @description A component that displays information about the sky and clouds
 * @component
 * @param {Object} SkyProps - The component props.
 * @param {number} weatherCode - A WMO Weather Code.
 * @param {number} cloudCover - Cloud coverage as a percentage
 * @returns {JSX.Element} The rendered component.
 */
const Sky = ({ weatherCode, cloudCover }: SkyProps): JSX.Element => {
    return (
        <div className={ styles.main }>
            <WMOToIcon weatherCode={weatherCode} />
            <div>
                <h2>{WMOToText(weatherCode)}</h2>
                <p>{cloudCover}% Cloud Coverage</p>
            </div>
        </div>
    )
}

export default Sky;