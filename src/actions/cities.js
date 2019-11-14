import { SELECT_CITY, LOAD_CITIES } from './actionTypes'

export const selectCity = (data) => ({
  type: SELECT_CITY,
  payload: data
})

export const loadCities = (data) => ({
  type: LOAD_CITIES,
  payload: data
})
