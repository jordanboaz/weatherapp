import React from 'react';
import { Card } from '../../src/components/Card'
import { render } from '../utils/render'

import { Card1, Card2, Cards } from './data'

const initialState = {
  weather: {
    city: undefined,
    count: 0,
    forecast: Cards,
    loading: false,
    units: 'imperial',
    selectedCard: undefined
  }
}

describe("Card", () => {
  it('should render', () => {
    const { asFragment, container } = render(<Card data={Card1 as any} />, {
      initialState
    })

    expect(container).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  });

  it('should display infos', () => {
    const { findByText } = render(<Card data={Card1 as any} />, {
      initialState
    })

    expect(findByText(Card1.key)).toBeTruthy()
    expect(findByText(Card1.metrics.tempMin)).toBeTruthy()
    expect(findByText(Card1.metrics.tempMax)).toBeTruthy()
    expect(findByText(Card1.metrics.averageTemp)).toBeTruthy()
    expect(findByText(Card1.metrics.weatherMode)).toBeTruthy()

  })

})