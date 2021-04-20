import { ResponsiveBar } from '@nivo/bar'

export function Graph({ data }) {
  return (
    <ResponsiveBar
      data={data}
      keys={["temp"]}
      indexBy="dt"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={'#f04a1d'}
      labelTextColor={"#FFFFFF"}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time',
        legendPosition: 'middle',
        legendOffset: 40
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Temperature °',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      animate={true}
    />)
}