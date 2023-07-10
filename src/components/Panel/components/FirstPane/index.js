/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleButton from '@/components/UI/Buttons/Toggle';
import SearchForm from '@/components/UI/SearchForm';

import {
  IconWrapper,
  InputWrapper,
  PanelWrapper,
  VisibilityRow,
} from './styles';

const FirstPane = () => {
  const [isPlaceholderVisible, setPlaceholderVisibility] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (value) => {
    setIsSubmitted(true);
    setIsError(value === '');
  };

  const handleToggle = (bool) => {
    setPlaceholderVisibility(bool);
    setIsError(false);
    setIsSubmitted(false);
  };

  return (
    <PanelWrapper>
      <VisibilityRow>
        {/* Not the provided icon - normally I would have asked the designer for two versions */}
        <IconWrapper>
          <FontAwesomeIcon icon={isPlaceholderVisible ? faEye : faEyeSlash} />
        </IconWrapper>
        <span>Show/hide</span>
        <ToggleButton
          $isActive={isPlaceholderVisible}
          onToggle={handleToggle}
        />
      </VisibilityRow>
      <InputWrapper $isActive={isPlaceholderVisible}>
        <SearchForm
          isError={isError}
          isSubmitted={isSubmitted}
          onSubmit={onSubmit}
        />
      </InputWrapper>
    </PanelWrapper>
  );
};

export default React.memo(FirstPane);
