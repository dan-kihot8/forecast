import React from 'react';
import {connect} from 'react-redux'

import CitySelector from './CitySelector'
import { selectCity }  from '../actions/cities'


class CitySelectorContainer extends React.Component {


  render () {
    return (
      <CitySelector 
        selectCity={this.props.selectCity}
        cities={this.props.cities}
      />
    )
  }
}

const mapDispatchToProps = { //putActionsToProps
  selectCity
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitySelectorContainer);

