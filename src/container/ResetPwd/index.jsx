import React from 'react';

import Header from '../Header';

import '../../styles/tmc/editpsw.scss'

class ResetPwd extends React.Component{
	render(){
		return (
			<div>
				<Header title="重置密码" backPath="/login"/>
				<div class="tmc-main tmc-editpsw">
				    <div class="J_validateCon validate-con">
				        <div class="m-edit"> 
							<div class="input-con J_phone">
				                <input type="tel" class="telphone" maxlength="11" placeholder="注册或绑定的手机号" />
				            </div> 
				            <div class="input-con J_vcode clearfix">
				                <input type="text" class="vcode" placeholder="短信验证码" />
				                <button class="btn-event  btn-warm" id="J_Vcode">获取验证码</button>
				            </div>
				        </div>
				        <div class="m-opt">
				            <button type="button" class="J_next btn-cold btn-next">下一步 设置新密码</button>
				        </div>
				    </div>
				    <div class="J_editCon edit-con hide">
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
				</div>
			</div>
		)
	}
}

export default ResetPwd

