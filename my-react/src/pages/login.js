import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { loginRegister } from '../api/getData.js';
const FormItem = Form.Item;


class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.loginRegisterFun(values)
      }
    });
  }
  async loginRegisterFun(form) {
  	let res = await loginRegister(form);
  	if(res.data.code === 0){
      localStorage.setItem("token",res.data.data.token)
      let from = this.props.location.state ? this.props.location.state.from : {pathname:"/home/aaa"}
    	this.props.history.push(from)
  	}
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<div className = "page-login">
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <h1>react demo</h1>
	        <FormItem>
	          {getFieldDecorator('user', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('pwd', {
	            rules: [{ required: true, message: '请输入密码' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
	        </FormItem>
	        <p className="tip">温馨提示：新用户自动注册登录，老用户按账号密码登录</p>
	      </Form>
	    </div>
    );
  }
}
Login = Form.create()(Login);

export default Login;
