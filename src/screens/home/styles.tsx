import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    padding: 10,
  },
  rightView: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    height: 80,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardBody: {
    marginLeft: 20,
    width: '100%',
  },
  avator: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
  },
});

export default styles;
