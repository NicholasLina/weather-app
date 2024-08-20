export const WMOInterpreter = (code: number) => {
    switch(code){

        // BASIC
        case 0: return("Clear Sky");
        case 1: return("Mainly Clear");
        case 2: return("Partly Cloudy");
        case 3: return("Overcast");

        // FOG
        case 45: return("Fog");
        case 48: return("Depositing Rime Fog");

        // DRIZZLE
        case 51: return("Light Drizzle");
        case 53: return("Moderate Drizzle");
        case 55: return("Dense Drizzle");

        // FREEZING DRIZZLE
        case 56: return("Light Freezing Drizzle");
        case 57: return("Dense Freezing Drizzle");

        // RAIN
        case 61: return("Light Rain");
        case 63: return("Moderate Rain");
        case 65: return("Dense Rain");

        // FREEZING RAIN
        case 66: return("Light Freezing Rain");
        case 67: return("Dense Freezing Rain");

        //SNOW FALL
        case 71: return("Light Snow");
        case 73: return("Moderate Snow");
        case 75: return("Dense Snow");

        //SNOW GRAINS
        case 77: return("Snow Grains");

        // RAIN SHOWERS
        case 80: return("Slight Rain Showers");
        case 81: return("Moderate Rain Showers");
        case 82: return("Violent Rain Showers");

        // SNOW SHOWERS
        case 85: return("Slight Snow Showers");
        case 86: return("Heavy Snow Showers");

        default: return("Error: Invalid WMO")
    }
}