import { LOAD_API_DATA, LOAD_CURRENT_WEATHER } from './actionTypes'

export const loadApiData = (data) => ({
  type: LOAD_API_DATA,
  payload: data
})

export const loadCurrentWeather = (data) => ({
  type: LOAD_CURRENT_WEATHER,
  payload: data
})
