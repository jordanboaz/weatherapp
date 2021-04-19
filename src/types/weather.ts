export type Units = 'metric' | 'imperial'

export interface CityInfo {
  id: number;
  name: string;
  country: string;
  sunset: number;
  sunrise: number;
}

export interface ForecastInfo {
  dt: number;
  dt_text: string;
  main: MainWeather;
  weather: WeatherInfo;
  wind: WindInfo;
}

export interface Forecast {
  [date_key: string]: {
    [time_key: string]: ForecastInfo
  }
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindInfo {
  speed: number;
  deg: number;
  gust: number
}