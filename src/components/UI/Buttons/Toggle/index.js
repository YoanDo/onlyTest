import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  background: ${({ $isActive, theme }) =>
    $isActive
      ? theme.colors.highlight
      : theme.colorWithOpacity(theme.colors.white, 8)};
  border-radius: 100px;
  width: 34px;
  height: 20px;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.quick};

  &:after {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    content: '';
    height: 16px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: transform ${({ theme }) => theme.transitions.quick};
    transform: ${({ $isActive }) =>
      $isActive && 'translateX(calc(100% - 2px))'};
    width: 16px;
  }
`;

const ToggleButton = ({ onToggle = () => {}, $isActive = false }) => {
  const handleToggle = () => {
    const newActiveState = !$isActive;
    onToggle(newActiveState);
  };

  return <ToggleContainer onClick={handleToggle} $isActive={$isActive} />;
};

ToggleButton.propTypes = {
  onToggle: PropTypes.func,
  $isActive: PropTypes.bool,
};

export default memo(ToggleButton);
