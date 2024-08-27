import { BsCloudDrizzleFill, BsCloudSnowFill } from "react-icons/bs";
import { FaCloud, FaCloudRain, FaCloudShowersHeavy, FaCloudSun, FaSun } from "react-icons/fa6";
import { MdFoggy } from "react-icons/md";

/**
 * @function WMOToText
 * @description Turn WMO Codes into useful descriptors
 * @param {number} code - WMO code to be interpreted.
 * @returns {string} The plain english descriptor.
 * 
 * https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
export const WMOToText = (code: number): string => {
    switch (code) {

        // BASIC
        case 0: return ("Clear Sky");
        case 1: return ("Mainly Clear");
        case 2: return ("Partly Cloudy");
        case 3: return ("Overcast");

        // FOG
        case 45: return ("Fog");
        case 48: return ("Depositing Rime Fog");

        // DRIZZLE
        case 51: return ("Light Drizzle");
        case 53: return ("Moderate Drizzle");
        case 55: return ("Dense Drizzle");

        // FREEZING DRIZZLE
        case 56: return ("Light Freezing Drizzle");
        case 57: return ("Dense Freezing Drizzle");

        // RAIN
        case 61: return ("Light Rain");
        case 63: return ("Moderate Rain");
        case 65: return ("Dense Rain");

        // FREEZING RAIN
        case 66: return ("Light Freezing Rain");
        case 67: return ("Dense Freezing Rain");

        //SNOW FALL
        case 71: return ("Light Snow");
        case 73: return ("Moderate Snow");
        case 75: return ("Dense Snow");

        //SNOW GRAINS
        case 77: return ("Snow Grains");

        // RAIN SHOWERS
        case 80: return ("Slight Rain Showers");
        case 81: return ("Moderate Rain Showers");
        case 82: return ("Violent Rain Showers");

        // SNOW SHOWERS
        case 85: return ("Slight Snow Showers");
        case 86: return ("Heavy Snow Showers");

        default: return ("Error: Invalid WMO")
    }
}

interface WMOToIconProps {
    weatherCode: number
}

/**
 * @function WMOToIcon
 * @description Turn WMO Codes into representative icons
 * @param {number} code - WMO code to be interpreted.
 * @returns {JSX.Element} The corresponding react-icon.
 * 
 * https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
 */
export const WMOToIcon = ({weatherCode}: WMOToIconProps): JSX.Element | string => {
    switch (weatherCode) {

        // BASIC
        case 0: return <FaSun />;
        case 1: return <FaCloudSun />;
        case 2: return <FaCloudSun />;
        case 3: return <FaCloud />;

        // FOG
        case 45: return <MdFoggy />;
        case 48: return <MdFoggy />;

        // DRIZZLE
        case 51: return <BsCloudDrizzleFill />;
        case 53: return <BsCloudDrizzleFill />;
        case 55: return <BsCloudDrizzleFill />;

        // FREEZING DRIZZLE
        case 56: return <BsCloudDrizzleFill />;
        case 57: return <BsCloudDrizzleFill />;

        // RAIN
        case 61: return <FaCloudRain />;
        case 63: return <FaCloudRain />;
        case 65: return <FaCloudRain />;

        // FREEZING RAIN
        case 66: return <FaCloudRain />;
        case 67: return <FaCloudRain />;

        //SNOW FALL
        case 71: return <BsCloudSnowFill />;
        case 73: return <BsCloudSnowFill />;
        case 75: return <BsCloudSnowFill />;

        //SNOW GRAINS
        case 77: return <BsCloudSnowFill />;

        // RAIN SHOWERS
        case 80: return <FaCloudShowersHeavy />;
        case 81: return <FaCloudShowersHeavy />;
        case 82: return <FaCloudShowersHeavy />;

        // SNOW SHOWERS
        case 85: return <FaCloudShowersHeavy />;
        case 86: return <FaCloudShowersHeavy />;

        default: return "Error: Invalid WMO"
    }
}