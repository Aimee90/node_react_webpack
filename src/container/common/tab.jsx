
import React from 'react'

const isActive = (index, activeIndex)=>{
	return activeIndex == index ? 'active': ''
}

export default class Nav extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	tabData: props.tabs
	  };
	}
	// tab nav click handler
	handleNavClick(e, navcode){
		const tabData = this.state.tabData.map(tab=>{
			if(tab.code == navcode){
				tab.active = true;
			}else{
				tab.active = false;
			}
			return tab;
		});
		this.setState({
			tabData: tabData
		})
	}
	// calculate tab's width
	tabW(){
		const wPct = parseFloat(1/this.state.tabData.length).toFixed(4)*100;
		return wPct + '%';
	}
	// create panels
	createLi(){
		var tabnav = [],tabpanel = [];
		this.state.tabData.map((tab, i) =>{
			const className = !!tab.active?'active':'',panelClass = 'tab-panel '+className;
			const tabw = {width: this.tabW()};
			tabnav.push(<li style={tabw} className={className} onClick= {(e)=>{return this.handleNavClick(e, tab.code)}}>{tab.tabname}<span></span></li>),
			tabpanel.push(<li className={panelClass} data-type={tab.code}>{tab.tabcontent}</li>)
		});
		return {
			nav: tabnav,
			panel: tabpanel
		}
	}
	// get active panel
	getActive(){
		return this.state.tabData.find(tab=> !!tab.active)
	}

	render(){
		const tab = this.createLi()
		return (
			<div>
				<ul class='nav-tabs'>{tab.nav}</ul>
				<ul class='nav-tabs-content'>{tab.panel}</ul>
			</div>
		)
	}
}