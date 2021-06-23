import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fcc019',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f0f0f0',
    textAlign: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    padding: 10,
    flexDirection: 'row',
  },
  leftView: {
    width: '50%',
  },
  rightView: {
    width: '50%',
  },
});

export default styles;
