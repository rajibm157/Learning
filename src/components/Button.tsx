import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface propsType {
  title: string;
  onPress: any;
}

const Button: React.FC<propsType> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fcc019',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f0f0f0',
    textAlign: 'center',
  },
});
