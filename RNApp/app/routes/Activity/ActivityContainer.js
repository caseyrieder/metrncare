import React from 'react';
import Activity from './Activity';
import Routes from '../';

const onScoringPress = () => {
  return navigator.push(Routes.getScRoute());
};

const ActivityContainer = (props) => {
  return (
    <Activity
      onScoringPress={() => setModalVisible(visible)}
    />
  );
};

ActivityContainer.propTypes = {
  onScoringPress: React.PropTypes.func,
};

export default ActivityContainer;
