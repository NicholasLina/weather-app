import { WMOToText, WMOToIcon } from "../../util/WMOInterpreter"
import styles from "../../styles/Sky.module.css"

interface SkyProps {
    weatherCode: number,
    cloudCover: number
}

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