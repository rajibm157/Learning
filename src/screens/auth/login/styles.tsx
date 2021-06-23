import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d1d1d1',
  },
  mainView: {
    flex: 1,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    width: '100%',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 20,
    paddingVertical: 20,
  },
  inputView: {
    width: '100%',
    margin: 20,
    alignItems: 'center',
  },
  buttonView: {
    width: 250,
    paddingHorizontal: 25,
  },
});

export default styles;
