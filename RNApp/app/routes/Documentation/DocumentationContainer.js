import React from 'react';
import Documentation from './Documentation';
import Routes from '../';

const onPatientsPress = (navigator) => {
  return navigator.push(Routes.getPatientsRoute());
};

const DocumentationContainer = (props) => {
  return (
    <Documentation
      onPatientsPress={() => onPatientsPress(props.navigator)}
    />
  );
};

DocumentationContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default DocumentationContainer;
