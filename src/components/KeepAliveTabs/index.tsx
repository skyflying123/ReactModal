import React from 'react';
import { useAliveController } from 'react-activation';
import Tab from './Tab';
import styles from './index.less';

const KeepAliveTabs: React.FC = () => {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();
  return (
    <ul className={styles['alive-tabs']}>
      {cachingNodes.map((node, idx) => {
        const nodeObj: { node: any } = { node };
        return <Tab key={idx} {...nodeObj} />;
      })}
    </ul>
  );
};

export default KeepAliveTabs;
