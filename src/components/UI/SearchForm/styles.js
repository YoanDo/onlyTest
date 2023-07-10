import { css, styled } from 'styled-components';

export const InputContainer = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colorWithOpacity(theme.colors.white, 5)};
  border: 1px solid
    ${({ theme }) => theme.colorWithOpacity(theme.colors.main, 8)};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.default};
  outline: none;
  padding: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(3.25)};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.spaceBlue};
    font-size: ${({ theme }) => theme.fontSizes.default};
    letter-spacing: -0.16px;
    line-height: 20px;
  }

  ${({ $isError }) =>
    $isError &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}

  ${({ $isSuccess }) =>
    $isSuccess &&
    css`
      border-color: ${({ theme }) => theme.colors.success};
    `}
`;

export const Icon = styled.span`
  align-items: center;
  display: flex;
  left: ${({ theme }) => theme.spacing(1)};
  pointer-events: none;
  position: absolute;
`;

export const Message = styled.div`
  align-items: center;
  display: flex;
  color: ${({ $isSuccess, theme }) =>
    $isSuccess ? theme.colors.success : theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  justify-content: flex-start;
  letter-spacing: -0.16px;
  margin-top: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  span {
    margin-left: ${({ theme }) => theme.spacing(0.25)};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: 2px;
`;

export const SearchFormWrapper = styled.form`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export const MessageWrapper = styled.div`
  height: ${({ $isActive }) => ($isActive ? '36px' : '0')};
  transition: ${({ theme }) => theme.transitions.default};
`;
