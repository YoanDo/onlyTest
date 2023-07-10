import React from 'react';
import { func } from 'prop-types';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colorWithOpacity(theme.colors.white, 5)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.main};
  display: flex;
  font-size: 9px;
  height: 32px;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.quick};
  width: 32px;
  &:hover {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ExitButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <FontAwesomeIcon icon={faX} />
  </Button>
);

ExitButton.propTypes = {
  onClick: func,
};

ExitButton.defaultProps = {
  onClick: Function.prototype,
};

export default React.memo(ExitButton);
