import React, { Component } from 'react'
import { Button, Table, Modal, Form, Input, Radio } from 'antd'
import { personList, personSave, personRemove } from '../api/getData.js'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const confirm = Modal.confirm;

class Home extends Component {

    state = {
    	dataSource:[],
    	visible: false,
    	form:{},
    	mm:"张强"
    }

    componentDidMount() {
        this.getPersonList()
        console.log(this.props)
    }
    async getPersonList(){
    	try{
			let res = await personList()
	    	let data = [...res.data.data.personDataList]
	    	data.map( item => item.key = item._id )
	    	this.setState({
	    		dataSource:data
	    	})
    	}catch(err){
    		console.log(err)
    	}
    }
    async personSaveFun(form){
    	let res = await personSave(form)
    	if(res.data.code === 0){
    		this.props.history.go(0)
    	}
    }
    async personRemoveFun(id){
    	let res = await personRemove({_id:id})
    	if(res.data.code === 0){
    		this.props.history.go(0)
    	}
    }
    handleSave = (record = {}) =>{
    	this.setState({
	      visible: true,
	      form: record
	    })
    }
    handleDel = (record) =>{
    	let _this = this;
    	confirm({
		    title: '提示',
		    content: '你确定要删除该联系人吗?',
		    okText: '确定',
		    okType: 'danger',
		    cancelText: '取消',
		    onOk() {
		      _this.personRemoveFun(record._id)
		    }
		});
    }
	handleOk = (e) => {
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	let form = Object.assign({},this.state.form,values)
	        this.personSaveFun(form)

	      }
	    });
	}
	handleCancel = (e) => {
	    this.setState({
	      visible: false,
	    })
	}
    render() {
    	const { getFieldDecorator } = this.props.form;
        const columns = [{
            title: '日期',
            dataIndex: 'date',
            key: 'date',
        },{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },{
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
            	<div>
	            	<Button type = "primary" onClick = { () => {this.handleSave(record)} } style={{marginRight:10}}>编辑</Button>
	            	<Button type = "primary" onClick = { () => {this.handleDel(record)} }  >删除</Button>
            	</div>
            ),
        }];

        return (
        	<div className = "page-home" >
            	<Button type = "primary" onClick = { () => {this.handleSave() } } > 新增联系人{this.state.mm} </Button>
            	<Table dataSource={this.state.dataSource} columns={columns} />
            	<Modal
		          title="新增/编辑联系人"
		          visible={this.state.visible}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		          okText="确认"
          		  cancelText="取消"
          		  destroyOnClose={true}
		        >
		       <Form>
			        <FormItem label="姓名" labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
			          {getFieldDecorator('name', {
			          	initialValue:this.state.form.name,
			            rules: [{ required: true, message: '请输入姓名' }],
			          })(
			            <Input placeholder="请输入姓名" />
			          )}
			        </FormItem>
			        <FormItem label="性别" labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
				        {getFieldDecorator('sex',{
				        	initialValue:this.state.form.sex,
				        	rules: [{ required: true, message: '请选择性别' }],
				        })(
				            <RadioGroup>
				              <Radio value="男">男</Radio>
				              <Radio value="女">女</Radio>
				            </RadioGroup>
				        )}
				    </FormItem>
			        <FormItem label="年龄" labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
			          {getFieldDecorator('age', {
			          	initialValue:this.state.form.age,
			            rules: [{ required: true, message: '请输入年龄' }],
			          })(
			            <Input type="age" placeholder="请输入年龄" />
			          )}
			        </FormItem>
			        <FormItem label="地址" labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
			          {getFieldDecorator('address', {
			          	initialValue:this.state.form.address,
			            rules: [{ required: true, message: '请输入地址' }],
			          })(
			            <Input type="address" placeholder="请输入地址" />
			          )}
			        </FormItem>
			    </Form>
		        </Modal>
            </div>
        );
    }
}

Home = Form.create()(Home);

export default Home;
