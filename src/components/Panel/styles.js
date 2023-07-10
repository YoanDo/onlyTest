import { styled } from 'styled-components';

export const PanelWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(1.5)}`};
  position: relative;
  width: 550px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const PanelHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const PanelTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.24px;
  line-height: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const PanelNavigation = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid
    ${({ theme }) => theme.colorWithOpacity(theme.colors.main, 8)};
  display: flex;
  height: ${({ theme }) => theme.spacing(2)};
  position: relative;
  width: 100%;
`;

export const Tab = styled.button`
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main : theme.colors.grey};
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  letter-spacing: -0.16px;
  line-height: 20px;

  margin-right: ${({ theme }) => theme.spacing(2)};
  transition: ${({ theme }) => theme.transitions.default};
  z-index: 1;
  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const GradientUnderline = styled.div`
  bottom: 0;
  position: absolute;
  transform: translateX(${({ $leftPosition }) => $leftPosition}px);
  transition: ${({ theme }) => theme.transitions.elastic};
  z-index: 0;
  width: 40px;
  height: 3px;
  background: url('/images/underline.png');
`;

export const PanelBody = styled.div``;

export const ExitButtonWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
`;
