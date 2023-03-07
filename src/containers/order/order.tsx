import React from 'react';
import { Button, Col, Form, Input, Modal, Row, Space, Table } from 'antd';
import { useAntdTable } from 'ahooks';
import { getTableData } from './api';
import ModalForm from './components/ModalForm';
import { useLocalStore, useObserver } from 'mobx-react';
import orderInstance from './store/order';
import CommonCard from '@components/CommonCard';

const Order = () => {
  const orderStore = useLocalStore(() => orderInstance);

  const [form] = Form.useForm();

  const { tableProps, search } = useAntdTable(getTableData, { form });

  const { submit, reset } = search;

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'content',
      dataIndex: 'content',
    },
  ];

  const onButtonClick = () => orderStore.setIsModalOpen(true);
  const onShowModal = () => orderStore.setIsCardModalOpen(true);
  const handleCardCancel = () => orderStore.setIsCardModalOpen(false);

  return useObserver(() => (
    <>
      <Space>
        <Button type="primary" onClick={onButtonClick}>新增</Button>
        <Button type="primary" onClick={onShowModal}>测试公共组件</Button>
      </Space>

      <div style={{ marginTop: '20px' }}>
        <Form form={form}>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="name" name="name">
                <Input placeholder="name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="id" name="id">
                <Input placeholder="id" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="content" name="content">
                <Input placeholder="content" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="end" style={{ marginBottom: 24 }}>
            <Button type="primary" onClick={submit}>
              Search
            </Button>
            <Button onClick={reset} style={{ marginLeft: 16 }}>
              Reset
            </Button>
          </Row>
        </Form>
      </div>

      <Table columns={columns} rowKey="id" {...tableProps} />

      <ModalForm updateList={submit} />

      <Modal
        title="common" 
        open={orderStore.isCardModalOpen}
        footer={null}
        onCancel={handleCardCancel}
      >
        <CommonCard getName={() => orderStore.cardName}>
          <div>公共组件 - order content</div>
        </CommonCard>
      </Modal>
    </>
  ));
};

export default Order