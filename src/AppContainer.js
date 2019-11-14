import React from 'react';
import { connect } from 'react-redux'

import App from './App'
import { loadApiData}  from './actions/apiData'
import { loadCities }  from './actions/cities'

class AppContainer extends React.Component {

  render() {
    return (
      <App         
        state={this.props.state}
        loadApiData={this.props.loadApiData}
        loadCities={this.props.loadCities}
      />
    )
  }
}

const mapDispatchToProps = {
  loadApiData,
  loadCities
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
