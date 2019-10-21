import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import appStore from './appStore';
import AddModal from './components/AddModal';
import CategoryList from './components/CategoryList';
import TodayDate from './components/TodayDate';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <Provider store={appStore}>
      <SafeAreaView style={styles.container}>
        {/* STATUS BAR */}
        <StatusBar barStyle='light-content' />

        {/* TODAY DATE */}
        <View style={[styles.pageMarginLeft, styles.todayDateContainer]}>
          <TodayDate />
        </View>

        {/* CATEGORY LIST */}
        <View style={[styles.categoryListContainer]}>
          <CategoryList />
        </View>

        {/* ADD CATEGORY BUTTON */}
        <View style={[styles.pageMarginLeft]}>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={styles.addCategoryButton}
          >
            <Text style={styles.addCategoryText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* MODAL */}
        <AddModal
          type='category'
          open={modalOpen}
          close={() => setModalOpen(false)}
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  todayDateContainer: {
    marginTop: 25,
    marginBottom: 50,
    marginLeft: 40
  },
  categoryListContainer: {
    marginBottom: 35,
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
  }
});
