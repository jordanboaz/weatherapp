import { CityInfo, ForecastWithAggregation, Units } from '../../types/weather';

export interface WeatherState {

  loading: boolean;
  city?: CityInfo
  count: number;
  forecast: ForecastWithAggregation[];
  units: Units;
  selectedCard: ForecastWithAggregation | undefined;

}

export interface SelectCardAction {
  payload: ForecastWithAggregation;
}
