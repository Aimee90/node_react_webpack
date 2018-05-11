
import React from 'react';
import { Link }  from 'react-router-dom'

import { NavFooter } from '../Footer'

import '../../styles/tmc/welcome.scss'

class Welcome extends React.Component{
	render(){
		return (<div class="m-welcome"><i class="icon-pos"></i><span>Hi，欢迎您，{this.props.userName}</span></div>)
	}
}
// menus component
class Menus extends React.Component{
	constructor(props) {
	  super(props);
	  const url = props.url||'#'
	  const type = props.type||'trip'
	  const enable = props.enable||false
	  const addable = props.addable||false
	  this.state = {
		enable: enable,	//是否启用
	  	url: url,	//默认跳转路径
	  	type: type,	//默认行程类型
	  	addable: addable	//是否包含添加按钮
	  }
	}
	render(){
		var preSets = this.handleParams()
		return (
			<Link to={this.state.url} className={preSets.menuClass}>
                <i className={preSets.iconClass}></i>
                <p>{preSets.menuName}</p>
                {preSets.addIcon}
            </Link>
		)
	}

	handleParams(){
		const menuNames = {"trip":"行程预定", "flight": "国内机票", "train": "火车票", "hotel": "国内酒店"}
		var addIcon = !!this.state.addable?<i className="icon-add"></i>:'';
		var menuClass = !!this.state.enable?"menu-item menu-" + this.state.type:"menu-item unable menu-" + this.state.type;
		return{
			addIcon: addIcon,
			iconClass: "icon-" + this.state.type,
			menuClass: menuClass,
			menuName: menuNames[this.state.type]
		}
	}
}

export default class Home extends React.Component{
	render(){
		return (
			<div className="main-container">
				<Welcome userName="zoulin"/>
				<div className="m-menu">
					<Menus addable="true"/>
					<Menus type="flight" url="/flight" enable="true" />
					<Menus type="train" url="/train" enable="true" />
					<Menus type="hotel" url="/hotel" enable="true" />
				</div>
				<NavFooter active='home'/>
			</div>
		)
	}
}