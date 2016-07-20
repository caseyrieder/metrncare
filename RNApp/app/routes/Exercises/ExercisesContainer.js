import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Exercises from './Exercises';

class ExercisesContainer extends Component {

  render() {
    const { exercisesReady } = this.props;

    return (
      <Exercises
        exercisesReady = { exercisesReady }
      />
    );
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('exercises-list');

  return {
    exercisesReady: handle.ready(),
  };
}, ExercisesContainer);
