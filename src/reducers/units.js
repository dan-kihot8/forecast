import {  SELECT_UNIT } from '../actions/actionTypes'
import {initialState} from '../state'

export default (state = initialState, action) => {
  switch (action.type) {

    case SELECT_UNIT:
      return {
        ...state,
        currentUnit: action.payload
      };

    default:
      return state
  }
}
