import { styled, keyframes } from 'styled-components';

const gradientColors = [
  '#F42173',
  '#AE02FC',
  '#000000',
  '#000000',
  '#FE670E',
  '#B658EB',
  '#0DBFF0',
  '#000000',
  '#F42173',
  '#AE02FC',
  '#000000',
  '#000000',
  '#FE670E',
  '#B658EB',
  '#0DBFF0',
  '#000000',
];

const animate = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const ShadowContainer = styled.div`
  align-items: center;
  background: linear-gradient(0deg, #000, #262626);
  display: flex;
  font-weight: bold;
  height: 600px;
  justify-content: center;
  margin: auto;
  position: relative;
  text-align: center;
  width: 550px;

  &::before,
  &::after {
    animation: ${animate} 100s linear infinite;
    background: linear-gradient(45deg, ${gradientColors.join(',')});
    background-size: 800%;
    content: '';
    height: calc(100% + 4px);
    left: -2px;
    position: absolute;
    top: -2px;
    width: calc(100% + 4px);
    z-index: -1;
  }

  &::after {
    filter: blur(240px);
  }
`;
