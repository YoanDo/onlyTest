import React, { useEffect, useRef, useState } from 'react';
import {
  ExitButtonWrapper,
  GradientUnderline,
  PanelBody,
  PanelHeader,
  PanelNavigation,
  PanelTitle,
  PanelWrapper,
  Tab,
} from './styles';
import FirstPane from './components/FirstPane';
import Carousel from '../UI/Carousel';
import ExitButton from '@/components/UI/Buttons/Exit';

const Panel = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const selectedTabRef = useRef(null);
  const [tabPositionLeft, setTabPositionLeft] = useState(0);

  useEffect(() => {
    if (selectedTabRef.current) {
      setTabPositionLeft(selectedTabRef.current.offsetLeft);
    }
  }, [selectedTab]);

  return (
    <PanelWrapper>
      <ExitButtonWrapper>
        <ExitButton />
      </ExitButtonWrapper>
      <PanelHeader>
        <PanelTitle>Title</PanelTitle>
        <PanelNavigation>
          <Tab
            $isSelected={selectedTab === 0}
            onClick={() => handleTabClick(0)}
            ref={selectedTab === 0 ? selectedTabRef : null}
          >
            Tab 1
          </Tab>
          <Tab
            $isSelected={selectedTab === 1}
            onClick={() => handleTabClick(1)}
            ref={selectedTab === 1 ? selectedTabRef : null}
          >
            Tab 2
          </Tab>
          <Tab
            $isSelected={selectedTab === 2}
            onClick={() => handleTabClick(2)}
            ref={selectedTab === 2 ? selectedTabRef : null}
          >
            Tab 3
          </Tab>
          <GradientUnderline $leftPosition={tabPositionLeft} />
        </PanelNavigation>
      </PanelHeader>
      <PanelBody>
        <Carousel selectedIndex={selectedTab}>
          <FirstPane />
          <div>second tab</div>
          <div>third tab</div>
        </Carousel>
      </PanelBody>
    </PanelWrapper>
  );
};

export default Panel;
