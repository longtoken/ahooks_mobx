import React from 'react';
import CommonCard from '@components/CommonCard';
import { useLocalStore, useObserver } from 'mobx-react';
import transportationInstance from './store/transportation';

const Transportation: React.FC = () => {
  const transportationStore = useLocalStore(() => transportationInstance);

  return useObserver(() => (
    <>
      <CommonCard getName={() => transportationStore.cardName}>
        <div>公共组件 - transportationStore content</div>
      </CommonCard>
    </>
  ));
};

export default Transportation;