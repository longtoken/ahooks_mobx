import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { useLocalStore, useObserver } from 'mobx-react';
import { useRequest } from 'ahooks';
import orderInstance from '../../store/order';
import { Item } from '../../interface';
import { addItem } from '../../api';
import { ModalFormProps } from './interface';

const ModalForm: React.FC<ModalFormProps> = (props) => {
  const orderStore = useLocalStore(() => orderInstance);

  const { run } = useRequest(addItem, {
    manual: true,
    onSuccess: (result) => {
      if (result) {
        message.success('添加成功');
        orderStore.setIsModalOpen(false);
        props.updateList();
      }
    }
  });

  const handleOk = () => {
    orderStore.setIsModalOpen(false);
  };

  const handleCancel = () => {
    orderStore.setIsModalOpen(false);
  };

  const onFinish = (values: Item) => {
    run(values);
  };

  return useObserver(() => (
    <Modal
      title="Basic Modal"
      open={orderStore.isModalOpen}
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form<Item>
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="name" name="name">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="content" name="content">
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  ));
};

export default ModalForm;
