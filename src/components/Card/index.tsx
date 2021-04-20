import { useDispatch } from 'react-redux';
import { ForecastWithAggregation } from '../../types/weather'
import { Container } from './styles';
import { selectCard } from '../../store/weather'
import { useTypedSelector } from '../../store/useTypedSelector';


interface CardProps {
  data: ForecastWithAggregation
}

const weatherFormatter = new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 })
const dateFormatter = new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric' })

export function Card({ data }: CardProps) {
  const dispatch = useDispatch();
  const currentCard = useTypedSelector((state) => state.weather?.selectedCard);
  const selected = currentCard?.key;

  const handleClick = () => {
    dispatch(selectCard(data))
  }
  return (
    <Container onClick={handleClick} key={data?.key} active={data?.key === selected} data-testid="cardButton" >
      {data?.key && <h2>{dateFormatter?.format(new Date(data?.key))}</h2>}

      <h1>{weatherFormatter?.format(data?.metrics?.averageTemp)}°</h1>
      <section>
        <div>
          <h4>Min</h4>
          <p>{weatherFormatter?.format(data?.metrics?.tempMin)}°</p>
        </div>
        <div>
          <h4>Max</h4>
          <p>{weatherFormatter?.format(data?.metrics?.tempMax)}°</p>
        </div>
      </section>
      <h3>
        {data?.metrics?.weatherMode}
      </h3>
    </Container>
  )
}