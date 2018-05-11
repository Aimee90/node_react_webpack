import TabNav from '../common/tab.jsx'
import React from 'react'
import Header from '../Header'
import CityPicker from '../common/switchableCityPicker.jsx'

import '../../styles/tmc/flight.scss'
const list = [
	{tabname: '单程',code:1,active:true,tabcontent: <h1>im content of sigle journey</h1>},
	{tabname: '往返',code:2,active:false,tabcontent: <h1>im content of go and back</h1>},
	{tabname: '多程',code:3,active:false,tabcontent: <h1>im content of multi journey</h1>}
]

class SearchInfo extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {};
	}


	render(){

	}
}

export default class FlightIndex extends React.Component{
	render(){
		return (
			<div>
				<Header backPath='/welcome' title='国内机票'/>
				<div class='tmc-main tmc-flight'>
					<TabNav tabs={list} ></TabNav>
				</div>
				<CityPicker></CityPicker>
			</div>
		)
	}
}