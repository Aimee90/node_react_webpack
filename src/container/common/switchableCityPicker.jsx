
import React from 'react'

import API from '../../API/api.js'

export default class CityPicker extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	citys: props.citys
	  };
	}

	getCitys(){
		console.log('now im query the fliht citys')
		API.post('/flight/city/query', null);
	}

	render(){
		this.getCitys()
		return <h1>this is module CityPicker!</h1>
	}
}
