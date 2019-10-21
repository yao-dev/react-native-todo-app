import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  test: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxUncomplete: {
    display: 'none'
  },
  taskName: {
    color: '#636e72',
    width: '100%',
  },
  taskCompleted: {
    textDecorationColor: '#636e72',
    textDecorationLine: 'line-through'
  },
  taskEdit: {
    marginRight: 5,
  },
  componentPaddingLeft: {
    paddingLeft: 20
  },
  componentPaddingRight: {
    paddingRight: 20
  },
  addTypeInput: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#303030',
  }
})
