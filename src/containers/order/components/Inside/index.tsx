import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useRequest } from 'ahooks';
import stepInstance from '../../store/step';
import { addItem } from '../../api';
import { useLocalStore, useObserver } from 'mobx-react';
import { reaction } from 'mobx';

const Inside: React.FC = () => {
  const stepStore = useLocalStore(() => stepInstance);
  const [form] = Form.useForm();

  const { runAsync } = useRequest(addItem, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        message.success('添加成功');
      }
    }
  });

  const onFinish = async () => {
    const result = await form.validateFields()
    if (result) {
      await runAsync(result);
      stepStore.setCurrent(stepStore.current + 1);
    }
  }

  reaction(
    () => stepStore.isClearForm,
    isClear => {
      if (isClear) {        
        form.resetFields();
        stepStore.setIsClearForm(false);
      }
    }
  );

  return useObserver(() => (
    <div>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  ));
};

export default Inside;
