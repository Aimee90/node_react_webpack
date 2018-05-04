import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component{
	render(){
		var preSet = this.paramsHandler()
		return (<div className={this.navClassHandler()}>
				    <Link to={preSet.url}>
				      <i className={preSet.iconClass}></i>
				      <p>{preSet.name}</p>
				    </Link>
				  </div>)
	}
	navClassHandler(){
		return !!this.props.active?"footer-item active":"footer-item"
	}
	paramsHandler(){
		const navSetting = {
			"home": {"name":"首页","iconClass":"icon-home","url":"/welcome"},
			"approve": {"name":"授权","iconClass":"icon-approve","url":"/approval"},
			"shedule":{"name":"日程","iconClass":"icon-schedule","url":"/mytrip"},
			"mycenter":{"name":"我的","iconClass":"icon-admin2","url":"/mycenter"}
		}
		return navSetting[this.props.type]
	}
}

export default class NavFooter extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	active: "home"
	  };
	}
	render(){
		return(
			<div class="tmc-footer">
				{this.activeHandler()}
			</div>
		)
	}
	activeHandler(){
		const menuList = ["home","approve","shedule","mycenter"]
		return menuList.map((menu)=>{return menu==this.props.active?<Nav type={menu} active="true"/>:<Nav type={menu}/>})
	}
}