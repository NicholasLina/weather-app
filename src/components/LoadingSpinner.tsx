import styles from "../styles/LoadingSpinner.module.css"

/**
 * @description A spinning icon to signify loading
 * @component
 * @returns {JSX.Element} The rendered component.
 */

import { AiOutlineLoading } from "react-icons/ai";

const LoadingSpinner = (): JSX.Element => {
    return (
        <div id={ styles.spinner }>
            <AiOutlineLoading />
        </div>
    )
}

export default LoadingSpinner;