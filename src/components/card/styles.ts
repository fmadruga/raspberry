import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 7.5,
    marginTop: 7.5,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowRadius: 1,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
