import api from './api';
import { ACCESS_KEY } from '../values/config'
import { Units, ForecastInfo, CityInfo } from '../types/weather'

export interface Request {
  city: string;
  cnt?: number;
  units?: Units
}

export interface WeatherResponse {
  city: CityInfo;
  list: ForecastInfo[];
  cnt: number;
}

const getForecast = ({ city = "Munich,de", cnt = 40, units = 'imperial' }: Request) => {
  const url = '/forecast';
  const params = {
    q: city, cnt, units,
  };
  return doRequest(url, params);
};

const doRequest = async (url: string, customParams = {}): Promise<WeatherResponse> => {
  try {
    const { data } = await api.get(url, { params: { ...customParams, APPID: ACCESS_KEY } });
    return data;
  } catch (error) {
    throw error.message;
  }
};


export { getForecast };