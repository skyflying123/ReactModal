import React, { useState } from 'react';
import './index.less';
import Page1 from './Page1';
import Page2 from './Page2';

const Calender: React.FC = () => {
  const [pageState, setPageState] = useState(1);
  const changePageState = (index: number): void => {
    setPageState(index);
  };
  const obj = { changePageState };
  const useSwitchPage = (): JSX.Element => {
    if (pageState === 1) {
      return <Page1 {...obj} />;
    }
    return <Page2 {...obj} />;
  };

  return <div className="riskControlDayWrap outWrapColor">{useSwitchPage()}</div>;
};

export default Calender;
