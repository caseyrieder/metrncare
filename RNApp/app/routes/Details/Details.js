import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const Details = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Details
      </Text>
      <Button
        text="Home"
        onPress={props.onHomePress}
      />
    </View>
  );
};

Details.propTypes = {
  onHomePress: React.PropTypes.func,
};

export default Details;
