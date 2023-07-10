import { styled } from 'styled-components';

export const PanelWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const VisibilityRow = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  justify-content: flex-start;
  letter-spacing: -0.14px;
  line-height: ${({ theme }) => theme.fontSizes.default};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  span {
    margin: 0 ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.default};
  justify-content: center;
  width: 20px;
`;

export const InputWrapper = styled.div`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  pointer-events: ${({ $isActive }) => ($isActive ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.transitions.default};
`;
