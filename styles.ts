import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    marginTop: 0,
  },
  item: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: 600,
  },
  backgroundImage: {
    minHeight: 345,
    minWidth: 230,
    justifyContent: 'flex-end',
    flex: 1,
    borderWidth: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameView: {
    height: 40,
  },
  name: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 50,
    right: 50,
    justifyContent: 'center',
  },
});
