import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { COLORS } from '../../styles';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

const Activity = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Activity
      </Text>
      <Text style={styles.main}>
        breakdown of the activity info goes here
      </Text>
      <TouchableHighlight
        onPress={() => {props.onScoringPress
          this.setModalVisible(!this.state.modalVisible)
      }}>
        <Text>Scoring Modal</Text>
      </TouchableHighlight>/>
    </View>
  );
};

Activity.propTypes = {
  onScoringPress: React.PropTypes.func,
};

export default Activity;
