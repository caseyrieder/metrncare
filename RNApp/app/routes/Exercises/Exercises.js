import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MeteorListView } from 'react-native-meteor';
import Loading from '../../components/Loading';

import { COLORS, GRID_SETTINGS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: COLORS.buttonBackground,
    color: COLORS.headerText,
    margin: GRID_SETTINGS.margin,
    width: GRID_SETTINGS.width,
    padding: 5
  }
});

const renderRow = (exercise) => {
  return (
    <Text style={styles.item}>
      {exercise.name}
    </Text>
  );
}

const Exercises = (props) => {
  const {exercisesReady} = props;

  return (
    !exercisesReady ? <Loading/> :
    <View style={styles.container}>
      <Text style={styles.main}>
        Exercise List
      </Text>
      <MeteorListView
        contentContainerStyle={styles.list}
        collection="exercises"
        renderRow={renderRow}/>
    </View>
  );
}

export default Exercises;
