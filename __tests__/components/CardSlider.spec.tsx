

import React from 'react';
import { CardsSlider } from '../../src/components/CardsSlider'
import { render } from '../utils/render'
import { fireEvent, screen, waitFor } from '@testing-library/react'
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

describe("CardsSlider", () => {
  it('should render', () => {
    const { asFragment, container } = render(<CardsSlider data={Cards as any} cardsToShow={1} />, {
      initialState
    })

    expect(container).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  });

  it('should shows only selected card', async () => {
    const { findByText, getByTestId } = render(<CardsSlider data={Cards as any} cardsToShow={1} />, {
      initialState
    })

    expect(findByText(Card1.metrics.weatherMode)).toBeTruthy();
    expect(findByText(Card2.metrics.weatherMode)).toMatchObject({})

    const rightArrow = getByTestId('rightarrow')

    fireEvent.click(rightArrow)

    await waitFor(() => screen.findByText(Card2.metrics.weatherMode));

    expect(findByText(Card1.metrics.weatherMode)).toMatchObject({});
    expect(findByText(Card2.metrics.weatherMode)).toBeTruthy()

  })


  it('should make no change when press left arrow and already on first page', async () => {
    const { findByText, getByTestId } = render(<CardsSlider data={Cards as any} cardsToShow={1} />, {
      initialState
    })

    expect(findByText(Card1.metrics.weatherMode)).toBeTruthy();
    expect(findByText(Card2.metrics.weatherMode)).toMatchObject({})

    const rightArrow = getByTestId('leftarrow')

    fireEvent.click(rightArrow)

    await waitFor(() => screen.findByText(Card1.metrics.weatherMode));

    expect(findByText(Card1.metrics.weatherMode)).toBeTruthy()
    expect(findByText(Card2.metrics.weatherMode)).toMatchObject({});

  })

})