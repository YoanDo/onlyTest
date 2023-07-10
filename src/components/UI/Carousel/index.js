import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ $selectedIndex }) => $selectedIndex * -100}%);
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
`;

const Carousel = ({ children, selectedIndex }) => (
  <CarouselContainer>
    <CarouselContent $selectedIndex={selectedIndex}>
      {children.map((child, index) => (
        <CarouselItem key={index}>{child}</CarouselItem>
      ))}
    </CarouselContent>
  </CarouselContainer>
);

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default React.memo(Carousel);
