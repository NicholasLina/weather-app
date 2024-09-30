/**
 * @description Footer element containing links to public APIs used in this project
 * @component
 * @returns {JSX.Element} The rendered component.
 */

const Footer = (): JSX.Element => {
    return (
        <footer>
            <p style={{color: "gray", fontSize: "12px"}}>Powered By: <a href="https://open-meteo.com/">Open-Meteo</a> and <a href="https://www.geoapify.com/">Geoapify</a></p>
        </footer>
    )
}

export default Footer;