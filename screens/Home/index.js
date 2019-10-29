import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, UIManager, View } from 'react-native';
import AddModal from '../../components/AddModal';
import CategoryList from '../../components/CategoryList';
import TodayDate from '../../components/TodayDate';
import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
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
      <View style={[styles.addCategoryButtonContainer, { right: styles.pageMargin }]}>
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
  );
}
