import {combineReducers} from 'redux'

import citiesReducer from './cities'
import apiDataReducer from './apiData'
import currentWeather from './currentWeather'
import units from './units'

const allReducers = combineReducers({
  cities: citiesReducer,
  apiData: apiDataReducer,
  currentWeather: currentWeather,
  units: units
})

export default allReducers;
