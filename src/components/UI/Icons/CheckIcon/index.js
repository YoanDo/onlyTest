import React from 'react';
import PropTypes from 'prop-types';

const CheckIcon = ({ size = 20, color = 'lime' }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33312 12.6433L15.9931 4.9825L17.1723 6.16083L8.33312 15L3.02979 9.69666L4.20812 8.51833L8.33312 12.6433Z"
      fill={color}
    />
  </svg>
);

CheckIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default React.memo(CheckIcon);
