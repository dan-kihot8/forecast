import React from 'react';
import {connect} from 'react-redux'

import CurrentWeather from './CurrentWeather'
import { loadCurrentWeather }  from '../actions/apiData'


class CurrentWeatherContainer extends React.Component {

  render () {
    return (
      <CurrentWeather 
        loadCurrentWeather={this.props.loadCurrentWeather}
        city={this.props.city}
        currentWeather={this.props.currentWeather}
        apiData={this.props.apiData}
        unit={this.props.unit}
      />
    )
  }
}

const mapDispatchToProps = { //putActionsToProps
  loadCurrentWeather
}

const mapStateToProps = state => {
  return {
    city: state.cities.currentCity,
    currentWeather: state.currentWeather,
    apiData: state.apiData,
    unit: state.units.currentUnit
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);

