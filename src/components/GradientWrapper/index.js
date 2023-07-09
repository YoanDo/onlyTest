import React from 'react';
import { node } from 'prop-types';
import { ShadowContainer } from './styles';

const GradientWrapper = ({ children }) => (
  <ShadowContainer>{children}</ShadowContainer>
);

GradientWrapper.propTypes = {
  children: node,
};

export default GradientWrapper;
