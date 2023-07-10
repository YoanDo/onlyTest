import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ size = 24, color = 'lime' }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.7832 16.3911L22 20.6069L20.6069 22L16.3911 17.7832C14.8224 19.0407 12.8713 19.7246 10.8609 19.7218C5.96968 19.7218 2 15.7521 2 10.8609C2 5.96968 5.96968 2 10.8609 2C15.7521 2 19.7218 5.96968 19.7218 10.8609C19.7246 12.8713 19.0407 14.8224 17.7832 16.3911ZM15.8082 15.6605C17.0577 14.3756 17.7555 12.6532 17.7527 10.8609C17.7527 7.05267 14.6681 3.96909 10.8609 3.96909C7.05267 3.96909 3.96909 7.05267 3.96909 10.8609C3.96909 14.6681 7.05267 17.7527 10.8609 17.7527C12.6532 17.7555 14.3756 17.0577 15.6605 15.8082L15.8082 15.6605V15.6605Z"
      fill={color}
    />
  </svg>
);

SearchIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default React.memo(SearchIcon);
