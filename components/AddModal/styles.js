import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  modalBody: {
    flex: 1,
  },
  modalTitle: {
    color: '#303030',
    fontSize: 30,
    marginBottom: 20,
    textTransform: 'capitalize'
  },
  closeModalIconContainer: {
    marginTop: 50,
    marginBottom: 35,
  },
  addTypeInput: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#303030',
  },
  submitButton: {
    height: 100,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
  componentPaddingLeft: {
    paddingLeft: 20
  },
  componentPaddingRight: {
    paddingRight: 20
  }
})
