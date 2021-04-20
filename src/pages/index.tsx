import Head from 'next/head'
import { Container, RadioContainer, GraphContainer } from '../styles/Home'
import { RadioGroup } from '../components/RadioGroup'
import { CardsSlider } from '../components/CardsSlider'
import { Loader } from '../components/Loader'
import { Graph } from '../components/Graph'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { fetchForecast } from '../store/weather'
import { useTypedSelector } from '../store/useTypedSelector';
import { Units } from '../types/weather';

const units = [
  {
    key: 'imperial',
    value: 'Fahrenheit'
  },
  {
    key: 'metric',
    value: 'Celsius'
  }
]

export default function Home() {
  const [unit, setUnit] = useState<Units>('imperial')
  const loading = useTypedSelector((state) => state.weather.loading)
  const forecasts = useTypedSelector((state) => state.weather.forecast)
  const selected = useTypedSelector((state) => state.weather.selectedCard)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast({ city: "Munich,de", units: unit }))
  }, [unit])

  return (
    <>
      <Head>
        <title>Weather App | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <RadioContainer>
          <RadioGroup options={units} onChange={(e: Units) => { setUnit(e) }} />
        </RadioContainer>

        <CardsSlider data={forecasts} cardsToShow={3} />

        {
          selected && (
            <GraphContainer>
              <Graph data={selected.timeForecast} />
            </GraphContainer>)
        }

      </Container>
      {loading && <Loader />}
    </>
  )
}
