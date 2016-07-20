import React from 'react';
import Home from './Home';
import Routes from '../';

const onDetailsPress = (navigator) => {
  return navigator.push(Routes.getDetailsRoute());
};

const onExercisesPress = (navigator) => {
  return navigator.push(Routes.getExercisesRoute());
};

const onDocumentationPress = (navigator) => {
  return navigator.push(Routes.getDocumentationRoute());
};


const HomeContainer = (props) => {
  return (
    <Home
      onDetailsPress={() => onDetailsPress(props.navigator)}
      onExercisesPress={() => onExercisesPress(props.navigator)}
      onDocumentationPress={() => onDocumentationPress(props.navigator)}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default HomeContainer;
