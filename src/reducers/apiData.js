import {  LOAD_API_DATA } from '../actions/actionTypes'
import {initialState} from '../state'

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_API_DATA:
      return {
        ...state,
        apiKey: action.payload.api_key,
        baseUrl: action.payload.base_url,
        iconPath: action.payload.icon_path,
        currentPath: action.payload.current_path,
        forecastPath: action.payload.forecast_path
      };

    default:
      return state
  }
}
