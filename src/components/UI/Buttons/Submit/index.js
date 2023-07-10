import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(1.5)}`};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.main};
  box-shadow: 0px -1px 2px 1px rgba(0, 0, 0, 0.32) inset,
    0px 2px 4px 0px rgba(0, 0, 0, 0.32);
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.16px;
  line-height: 20px;
  transition: ${({ theme }) => theme.transitions.default};
  width: fit-content;
  &:hover {
    box-shadow: 0px -2px 4px 2px rgba(0, 0, 0, 0.32) inset,
      0px 4px 8px 0px rgba(0, 0, 0, 0.32);
    transform: translateY(1px);
  }
`;

const SubmitButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>Submit</StyledButton>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func,
};

export default React.memo(SubmitButton);
