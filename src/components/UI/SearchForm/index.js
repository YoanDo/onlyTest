import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import theme from '@/assets/theme';
import SearchIcon from '../Icons/SearchIcon';
import CheckIcon from '../Icons/CheckIcon';
import WarningIcon from '../Icons/WarningIcon';
import SubmitButton from '../Buttons/Submit';
import {
  ButtonWrapper,
  Icon,
  Input,
  InputContainer,
  Message,
  MessageWrapper,
  SearchFormWrapper,
} from './styles';

const SearchForm = ({
  isError = false,
  isSubmitted = false,
  onSubmit = () => {},
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const renderMessage = () => {
    if (isSubmitted && !isError) {
      return (
        <Message $isSuccess={!isError}>
          <CheckIcon size={20} color={theme.colors.success} />
          <span>Success message</span>
        </Message>
      );
    }
    if (isSubmitted && isError) {
      return (
        <Message $isSuccess={!isError}>
          <WarningIcon size={20} color={theme.colors.error} />
          <span>Error message</span>
        </Message>
      );
    }
    return null;
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <InputContainer>
        <Icon>
          <SearchIcon color={theme.colors.spaceBlue} size={24} />
        </Icon>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          $isError={isError}
          $isSuccess={isSubmitted && !isError}
          placeholder="Placeholder"
        />
      </InputContainer>
      <MessageWrapper $isActive={isSubmitted}>{renderMessage()}</MessageWrapper>
      <ButtonWrapper>
        <SubmitButton />
      </ButtonWrapper>
    </SearchFormWrapper>
  );
};

SearchForm.propTypes = {
  isError: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default React.memo(SearchForm);
