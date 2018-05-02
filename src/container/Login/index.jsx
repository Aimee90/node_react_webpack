import React, { Component } from 'react';
import { render } from 'react-dom';

import Footer from '../Footer'
// stylesheet
import '../../styles/global-m.scss'
import '../../styles/tmc/login.scss'


class LoginInfo extends React.Component{
	render(){
		return (
			<div class="tmc-login">
            	<div class="logo"><img src="../../img/tmclogo01.png" /></div>
            	<div class="input-con">
                	<div class="input-item"><i class="icon-admin"></i><input type="text" maxlength="11" name="username" placeholder="卡号／邮箱／手机号" /></div>
                	<div class="input-item"><i class="icon-password"></i><input type="password" name="password" placeholder="请输入密码" /></div>
            	</div>
            	<div class="clearfix"><a href="/msite/forget/psw">忘记密码？</a></div>
            <button type="submit" class="btn-cold btn-login" id="login_submit">登录</button>
        	</div>
		);
	}
}

class Login extends React.Component{
	render(){
		return(
		<div>
			<LoginInfo />
			<Footer />
		</div>
		)
	}
}

export default Login;