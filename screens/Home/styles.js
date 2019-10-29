import { StyleSheet } from 'react-native';
import globalStyles from '../../common/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  todayDateContainer: {
    marginTop: globalStyles.marginTop,
    marginBottom: 50,
    marginLeft: 40
  },
  categoryListContainer: {
    // marginBottom: 35,
  },
  addCategoryButtonContainer: {
    position: 'absolute',
    bottom: 35,
  },
  addCategoryButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCategoryText: {
    color: '#303030',
    fontSize: 30,
    lineHeight: 30,
  },
  pageMarginLeft: {
    marginLeft: 40
  },
  pageMargin: 40,
});
