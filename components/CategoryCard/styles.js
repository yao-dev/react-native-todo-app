import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 450,
    width: width - 80,
    backgroundColor: '#FFF',
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  header: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerImageBackground: {
    width: width - 80,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7
  },
  headerTitle: {
    color: '#303030',
    fontSize: 30,
    fontWeight: 'bold'
  },
  body: {
    width: '100%',
    backgroundColor: '#FFF',
  },
  footer: {
    height: 75,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey'
  },
  addText: {
    textTransform: 'uppercase',
    color: '#303030',
    fontWeight: 'bold'
  },
  componentPaddingLeft: {
    paddingLeft: 20
  },
  componentPaddingRight: {
    paddingRight: 20
  }
})
