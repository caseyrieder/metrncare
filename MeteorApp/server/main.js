import { Meteor } from 'meteor/meteor';
import { Exercises } from '/lib/collections';
import { EXERCISE_LIST } from '/lib/careItems/exerciseList';
import publications from './publications';

Meteor.startup(() => {
  // code to run on server at startup
  if (Exercises.find().count === 0) {
    const exercises = EXERCISE_LIST;

    exercises.forEach((exercise) => {
      Exercises.insert({
        num: exercise.num,
        id: exercise.id,
        name: exercise.name,
        set: exercise.set,
      });
    });
  }
});

publications();
