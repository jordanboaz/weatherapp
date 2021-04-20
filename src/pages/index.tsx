import Head from 'next/head'
import { Container, } from '../styles/Home'
import { CardsSlider } from '../components/CardsSlider'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { fetchForecast } from '../store/weather'
import { useTypedSelector } from '../store/useTypedSelector';

export default function Home() {
  const loading = useTypedSelector((state) => state.weather.loading)
  const forecasts = useTypedSelector((state) => state.weather.forecast)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast({ city: "Munich,de" }))
  }, [])

  if (loading) {
    return <p>Loading</p>
  }

  return (
    <>
      <Head>
        <title>Weather App | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

        <CardsSlider data={forecasts} cardsToShow={3} />

      </Container>

    </>
  )
}
