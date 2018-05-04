import React from 'react';

import Header from '../Header';

import '../../styles/tmc/editpsw.scss'

// vcode validation
class Validate extends React.Component{
	render(){
		return (
		    <div class="validate-con">
		        <div class="m-edit"> 
					<div class="input-con">
		                <input type="tel" class="telphone" maxlength="11" placeholder="注册或绑定的手机号" value={this.props.phone}/>
		            </div> 
		            <div class="input-con clearfix">
		                <input type="text" class="vcode" placeholder="短信验证码" />
		                <button class="btn-event  btn-warm">获取验证码</button>
		            </div>
		        </div>
		        <div class="m-opt">
		            <button type="button" class="J_next btn-cold btn-next">下一步 设置新密码</button>
		        </div>
		    </div>
		)
	}
}

// reset password
class PwdEdit extends React.Component{
	render(){
		return (
		    <div class="edit-con hide">
		        <div class="m-edit">
		            <div class="input-con">
		                <input type="password" class="psss-input" name="newPassword" placeholder="必须6-20位字母或数字(设置密码)" />
		            </div>
		            <div class="input-con">
		                <input type="password" class="psss-input" name="confirmPassword" placeholder="必须6-20位字母或数字(确认密码)" />
		            </div>
		        </div>
		        <div class="m-opt">
		            <button type="button" class="J_sure btn-cold btn-next">确定</button>
		        </div>
		    </div>
		)
	}
}

class ResetPwd extends React.Component{
	render(){
		return (
			<div>
				<Header title="重置密码" backPath="/login"/>
				<div class="tmc-main tmc-editpsw">
					<Validate phone="15951964539"/>
					<PwdEdit />
				</div>
			</div>
		)
	}
}

export default ResetPwd

