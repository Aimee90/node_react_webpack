import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

import { Footer } from '../Footer'
// stylesheet
import '../../styles/tmc/login.scss' 

// 登录信息
class Login extends React.Component{
	

	render(){
		return (
			<div class="main-container">
				<div class="tmc-login">
	            	<div class="logo"><img src="assets/tmclogo01.png"/></div>
	            	<div class="input-con">
	                	<div class="input-item"><i class="icon-admin"></i><input type="text" maxlength="11" name="username" placeholder="卡号／邮箱／手机号" /></div>
	                	<div class="input-item"><i class="icon-password"></i><input type="password" name="password" placeholder="请输入密码"/></div>
	            	</div>
	            	<div class="clearfix"><Link to="/forget/psw">忘记密码？</Link></div>
	            	<button type="button" class="btn-cold btn-login" id="login_submit">登录</button>
	        	</div>
	        	<Footer />
        	</div>
		);
	}
}

export default Login;