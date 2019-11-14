import React from 'react';

import CitySelectorContainer from './components/CitySelectorContainer'
import CurrentWeatherContainer from './components/CurrentWeatherContainer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const confFile = '/public/config.json'
    fetch(confFile)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.props.loadCities(jsonData.cities)
        this.props.loadApiData(jsonData.api_data)
      })
      .catch (error =>  {
        alert('Error: not found: '+ confFile)
        console.log(error);
      })
  }

  render() {
    // console.log(this.props);
    return (
      <div className=''>
        <CitySelectorContainer />
        <CurrentWeatherContainer />
      </div>
    );
  }
}

