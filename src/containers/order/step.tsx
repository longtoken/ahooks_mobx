import React from 'react';
import { Button, message, Steps } from 'antd';
import { useLocalStore, useObserver } from 'mobx-react';
import Content from './components/Content';
import stepInstance from './store/step';

const steps = [
  {
    title: 'First',
    content: <Content><div>first content</div></Content>,
  },
  {
    title: 'Second',
    content: <Content><div>second content</div></Content>,
  },
  {
    title: 'Last',
    content: <Content><div>last content</div></Content>,
  },
];

const Step: React.FC = () => {
  const stepStore = useLocalStore(() => stepInstance);
  
  const next = () => {
    stepStore.setCurrent(stepStore.current + 1);
  };

  const prev = () => {
    stepStore.setCurrent(stepStore.current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onClearForm = () => {
    stepStore.setIsClearForm(true);
  };

  return useObserver(() => (
    <>
      <Button type="primary" onClick={onClearForm} style={{ marginBottom: '20px' }}>clear form</Button>
      <Steps current={stepStore.current} items={items} />
      <div style={{ padding: '50px', minHeight: 600 }}>{steps[stepStore.current]?.content}</div>
      <div style={{ marginTop: 24 }}>
        {stepStore.current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {stepStore.current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {stepStore.current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  ));
};

export default Step;