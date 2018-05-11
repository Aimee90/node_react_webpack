import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

import { Footer } from '../Footer'
// stylesheet
import '../../styles/tmc/login.scss' 

// 登录信息
class Login extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	username: '',
	  	password: ''
	  };
	}
	checkUsernameValidity() {
		var $mobilePhone = $("input[name='username']");
		if ($mobilePhone.val().length == 0) {
			showErrTip("请输入手机号码");
			$mobilePhone.focus();
			return false;
		} else {
			if (!validateMobilePhone($mobilePhone.val())) {
				showErrTip("您的手机号码格式不正确");
				$mobilePhone.focus();
				return false;
			} else {
				return true;
			}
		}
	}
	checkPwdValidity() {
		var $password =$("input[name='password']");
		if ($password.val().length < 6) {
			showErrTip("请输入密码(6-10位)");
			$password.focus();
			return false;
		} else {
			return true;
		}
	}
	validateMobilePhone(mphone) {
		var phonePattern = /^((1)+\d{10})$/;
		if (!phonePattern.test(mphone)) {
			return false;
		} else {
			return true;
		}
	}
	valueChange(e){
		const stateName = e.target.getAttribute('name');
		var state = this.state;
		state[stateName] = e.target.value;
		this.setState(state);
	}
	login(){
		console.log('login',this.state)
	}

	render(){
		return (
			<div className="main-container">
				<form action="#" method="post" id="bind" >
					<div className="tmc-login">
		            	<div className="logo"><img src="assets/tmclogo01.png"/></div>
		            	<div className="input-con">
		                	<div className="input-item"><i className="icon-admin"></i><input type="text" maxlength="11" name="username" placeholder="卡号／邮箱／手机号" value={this.state.username} onChange={this.valueChange.bind(this)}/></div>
		                	<div className="input-item"><i className="icon-password"></i><input type="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={this.valueChange.bind(this)}/></div>
		            	</div>
		            	<div className="clearfix"><Link to="/forget/psw">忘记密码？</Link></div>
		            	<button type="submit" className="btn-cold btn-login" onClick={this.login.bind(this)}>登录</button>
		        	</div>
	        	</form>
	        	<Footer />
        	</div>
		);
	}
}

export default Login;