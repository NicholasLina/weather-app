export interface Coordinates {
    city: string,
    lat: number,
    lon: number,
    error: string
};

export interface WeatherData {
    time: Date,
    temperature: number,
    apparentTemperature: number,
    temperatureMax: number,
    temperatureMin: number,
    relativeHumidity: number,
    isDay: number,
    precipitation: number,
    weatherCode: number,
    cloudCover: number,
    windSpeed: number,
    windDirection: number,
}