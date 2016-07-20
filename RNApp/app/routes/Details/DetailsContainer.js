import React from 'react';
import Details from './Details';
import Routes from '../';

const onHomePress = (navigator) => {
  return navigator.push(Routes.getHomeRoute());
};

const DetailsContainer = (props) => {
  return (
    <Details
      onHomePress={() => onHomePress(props.navigator)}
    />
  );
};

DetailsContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default DetailsContainer;
