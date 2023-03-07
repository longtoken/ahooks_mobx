import React from 'react';
import { Card } from 'antd';
import { observer } from 'mobx-react';
import { CommonCardProps } from './interface';

const CommonCard = observer((props: CommonCardProps) => (
  <Card size="small" title={props.getName()}>
    {props.children}
  </Card>
))

export default CommonCard;
