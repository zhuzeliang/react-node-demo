import React, { Component } from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
      age: Form.createFormField({
        ...props.age,
        value: props.age.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="age">
        {getFieldDecorator('age', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class Demo extends Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
      age: {
        value: 10,
      },
    },
  };
  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }
  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}


export default Demo;
