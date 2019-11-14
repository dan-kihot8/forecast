import React from 'react';
// import { Autocomplete } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import {buildUrl} from '../utils'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '15.25%',
    paddingBottom: '20px',
    backgroundSize: 'auto',
    backgroundPosition: 'left',
  }
};

class CurrentWeather extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      city: null
    }
  }


  fetchData() {
    let {baseUrl, currentPath, apiKey} = this.props.apiData;
    if (apiKey && this.props.city) {
      let qsParams = {
        APPID: apiKey,
        q: this.props.city,
        units: this.props.unit
      }
      let startUrl = baseUrl+currentPath
      const url = buildUrl(startUrl, qsParams)
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(jsonData => {
          if (!jsonData.weather)
            throw (jsonData)
          this.setState(
            {fetched: true, city: this.props.city}
          )
          this.props.loadCurrentWeather(jsonData);
        })

        .catch (error =>  {
          if (error.message) alert('Error: '+ error.message)
          console.log(error);
        })
    }
  }

  returnUnitSign(unit) {
    switch(unit) {
      case 'metric':
        return '°C'
      case 'standart':
        return 'K'
      default:
        return 'F'
    }
  }

  
  render() {
    const { classes } = this.props;
    // console.log('render', this.props);
    if (this.props.apiData.apiKey && 
      (!this.state.fetched || this.props.city !== this.state.city)) {
      console.log("CALL FECTH");
      this.fetchData()
    }
    if (this.props.currentWeather) {
      var { dt, weather, main, wind, sys } = this.props.currentWeather
      var {iconPath} = this.props.apiData
      var iconUrl = iconPath + weather.icon + '@2x.png'
      var unitSign = this.returnUnitSign(this.props.unit)
    }

		return(
      <div> { this.props.currentWeather &&
        <Card className={classes.card}>
  			  <CardHeader
            title="Now"
            subheader={`on ${new Date(dt*1000).toLocaleTimeString('Ru')}`}
          />
          <CardMedia
            className={classes.media}
            image={iconUrl}
            title={weather.main}
          >
          </CardMedia>
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p" align="left">
              {weather.description} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Temp max: {main.temp_max} {unitSign}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Temp: {main.temp} {unitSign}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Temp min: {main.temp_min} {unitSign}
              </Typography>
            
          </CardContent>
        </Card>
      }
      </div>
    )
	}
}

CurrentWeather.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentWeather);
