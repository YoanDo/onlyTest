import React from 'react';
import PropTypes from 'prop-types';

const WarningIcon = ({ size = 20, color = 'lime' }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 18.3333C5.3975 18.3333 1.66667 14.6025 1.66667 10C1.66667 5.39751 5.3975 1.66667 10 1.66667C14.6025 1.66667 18.3333 5.39751 18.3333 10C18.3333 14.6025 14.6025 18.3333 10 18.3333ZM10 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.7141C15.9643 13.4638 16.6667 11.7681 16.6667 10C16.6667 8.2319 15.9643 6.5362 14.714 5.28596C13.4638 4.03572 11.7681 3.33334 10 3.33334C8.23189 3.33334 6.5362 4.03572 5.28596 5.28596C4.03571 6.5362 3.33333 8.2319 3.33333 10C3.33333 11.7681 4.03571 13.4638 5.28596 14.7141C6.5362 15.9643 8.23189 16.6667 10 16.6667V16.6667ZM9.16667 12.5H10.8333V14.1667H9.16667V12.5ZM9.16667 5.83334H10.8333V10.8333H9.16667V5.83334Z"
      fill={color}
    />
  </svg>
);

WarningIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default React.memo(WarningIcon);
