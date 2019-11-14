import {  LOAD_CURRENT_WEATHER } from '../actions/actionTypes'
import {initialState} from '../state'

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_CURRENT_WEATHER:
      if (action.payload.weather)
        return {
          ...state,
          weather: action.payload.weather[0],
          main: action.payload.main,
          wind: action.payload.wind,
          dt: action.payload.dt,
          sys: action.payload.sys
        }
      else 
        return null;

    default:
      return state
  }
}
