
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherState, SelectCardAction } from './types';
import { getForecast, Request } from '../../services/weatherService';
import { restructurePayload } from '../../utils/forecastResponse'

const INITIAL_STATE: WeatherState = {
  city: undefined,
  count: 0,
  forecast: [],
  loading: false,
  units: 'imperial',
  selectedCard: undefined
};

export const fetchForecast = createAsyncThunk('weather/fetch', async (params: Request) => {
  const data = await getForecast(params);
  return data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: INITIAL_STATE,
  reducers: {
    selectCard(state, action: SelectCardAction) {
      state.selectedCard = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForecast.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload.city;
      state.count = action.payload.cnt;
      state.selectedCard = undefined;
      state.forecast = restructurePayload(action.payload.list);
    });
  },
});

export const { selectCard } = weatherSlice.actions;

export default weatherSlice.reducer;