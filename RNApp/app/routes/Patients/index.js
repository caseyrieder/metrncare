import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {COLORS, GRID_SETTINGS} from '../../styles';

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

const Patients = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Patients List
      </Text>
    </View>
  );
};

export default Patients;
