import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


export default class CitySelector extends React.Component {

	constructor(props) {
    super(props);
    // console.log(this.props);
    this.select = this.select.bind(this)
    // let { cities: {currentCity, list} } = this.props
  }

  select(e, value){
  	console.log('select:', value);
  	this.props.selectCity(value)
  }

  render() {
    
    const { cities: {currentCity, list} } = this.props
		return(
      <div>
			<Autocomplete
			  options={list}
			  onChange={this.select}
        renderInput={params => (
          <TextField {...params} label="Select a city" variant="outlined"  />
        )}
			/>
      </div>
    )
	}
}
