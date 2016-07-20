import { Meteor } from 'meteor/meteor';
import { Exercises } from '/lib/collections';

export default function() {
  Meteor.publish('exercises-list', function() {
    return Exercises.find();
  });
}
