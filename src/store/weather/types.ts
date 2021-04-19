import { CityInfo, Forecast } from '../../types/weather';

export interface WeatherState {

  loading: boolean;
  city?: CityInfo
  count: number;
  forecast: Forecast[];
}

