import { SELECT_CITY, LOAD_CITIES } from '../actions/actionTypes'
import {initialState} from '../state'

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };

    case LOAD_CITIES:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state
  }
}
