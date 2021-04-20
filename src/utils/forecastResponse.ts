import { ForecastInfo, ForecastWithAggregation } from '../types/weather'

export const restructurePayload = (data: ForecastInfo[]): ForecastWithAggregation[] => {
  const obj = data.reduce((acc, cur) => {

    const datetime = new Date(cur.dt * 1000)

    const date = datetime.toLocaleDateString() // Get the Day
    const time = datetime.toLocaleTimeString() // Get only the time

    acc[date] = { ...acc[date], [time]: cur }

    return acc;
  }, {})

  const aggregated = Object.entries(obj).map(([key, timeChunk]: [key: string, timeChunk: ForecastInfo[]]) => {
    const timeChunkArray = Object.values(timeChunk)
    const metrics = calculateMetricsAggregation(timeChunkArray);

    return {
      key,
      metrics,
      timeForecast: timeChunkArray.map((e) => ({ dt: new Date(e.dt * 1000).toLocaleTimeString(), temp: e.main.temp })),
    }

  })

  return aggregated
}

const calculateMetricsAggregation = (data: ForecastInfo[]) => {
  const aggregation = data.reduce((acc, cur) => {
    acc.averageHumidity = acc.averageHumidity + cur.main.humidity;
    acc.averageTemp = acc.averageTemp + cur.main.temp;
    acc.tempMax = Math.max(acc.tempMax, cur.main.temp_max);
    acc.tempMin = Math.min(acc.tempMin, cur.main.temp_min);
    acc.weatherModeAcc.push(cur.weather[0].main)
    return acc;
  }, {
    tempMin: +Infinity,
    tempMax: -Infinity,
    averageHumidity: 0,
    averageTemp: 0,
    weatherModeAcc: [],
    weatherMode: ''
  });

  aggregation.averageHumidity = aggregation.averageHumidity / data.length;
  aggregation.averageTemp = aggregation.averageTemp / data.length;
  aggregation.weatherMode = mode(aggregation.weatherModeAcc)


  return aggregation;

}

const mode = (arr: string[]) => {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length
    - arr.filter(v => v === b).length
  ).pop();
}
