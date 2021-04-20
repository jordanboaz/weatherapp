import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Container, Arrow } from './styles'
import { Card } from '../Card';
import { useMemo, useState } from 'react';
import { ForecastWithAggregation } from '../../types/weather'

interface CardsSliderProps {
  data: ForecastWithAggregation[];
  cardsToShow: number;
}

const createIndexesArray = (size: number) => Array(size).fill(1).map((v, index) => index)

export function CardsSlider({ data, cardsToShow }: CardsSliderProps) {
  const [indexesShowing, setIndexesShowing] = useState(createIndexesArray(cardsToShow))

  const { first, last } = useMemo(() => {
    return { first: indexesShowing[0], last: indexesShowing[indexesShowing.length - 1] }
  }, [indexesShowing]);


  const { isOnFirst, isOnLast } = useMemo(() => {
    return { isOnFirst: first === 0, isOnLast: last === data.length - 1 }
  }, [first, last])

  const handleLeftArrowClick = () => {
    if (first <= 0) {
      return
    }

    const clone = [...indexesShowing];

    clone.pop();
    clone.unshift(first - 1)
    setIndexesShowing(clone)

  }

  const handleRightArrowClick = () => {

    if (last >= data.length - 1) {
      return
    }

    const clone = [...indexesShowing];

    clone.shift();
    clone.push(last + 1)
    setIndexesShowing(clone)
  }

  console.log(indexesShowing)
  return (
    <Container numCards={cardsToShow}>
      <Arrow onClick={handleLeftArrowClick} data-testid="leftarrow" disabled={isOnFirst}>
        {!isOnFirst && <FiChevronLeft />}
      </Arrow>
      {indexesShowing.map((index) => {
        return <Card key={index} data={data[index]} />
      })}
      <Arrow onClick={handleRightArrowClick} data-testid="rightarrow" disabled={isOnLast} >
        {!isOnLast && <FiChevronRight />}
      </Arrow>
    </Container>
  )
}