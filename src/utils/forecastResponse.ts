import { ForecastInfo } from '../types/weather'

export const restructurePayload = (data: ForecastInfo[]) => {
  return data.reduce((acc, cur) => {

    const datetime = new Date(cur.dt * 1000)

    const date = datetime.toLocaleDateString() // Get the Day
    const time = datetime.toLocaleTimeString() // Get only the time

    acc[date] = { ...acc[date], [time]: cur }

    return acc;
  }, {})
}