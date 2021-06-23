import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Title: React.FC<any> = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
};

const Menu: React.FC<any> = ({navigation}) => {
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <View style={styles.menu}>
        <Icon name="menu" color="#f0f0f0" size={26} />
      </View>
    </TouchableOpacity>
  );
};

const Blank: React.FC = () => {
  return <View style={styles.blank} />;
};

export default {Title, Menu, Blank};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f0f0f0',
    textAlign: 'center',
  },
  menu: {
    padding: 5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  blank: {
    margin: 20,
  },
});
