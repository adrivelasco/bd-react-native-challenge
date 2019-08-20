import React from 'react';
import { arrayOf, bool, object } from 'prop-types';
import { Text } from '@shoutem/ui';

import { Loader, List } from './styled';

const DrinksList = ({ isLoading, items }) => {
  if (isLoading) {
    return (
      <Loader>
        <Text>Loading</Text>
      </Loader>
    );
  }

  return <List />;
};

DrinksList.propTypes = {
  isLoading: bool,
  items: arrayOf(object),
};

DrinksList.defaultProps = {
  isLoading: false,
  items: [],
};

export default DrinksList;
