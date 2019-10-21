import { Provider as ANTProvider } from '@ant-design/react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { Provider } from 'react-redux';
import appStore from './appStore';
import AddModal from './components/AddModal';
import CategoryList from './components/CategoryList';
import TodayDate from './components/TodayDate';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const useAntDesign = async () => {
  await Font.loadAsync(
    'antoutline',
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antoutline.ttf')
  );

  await Font.loadAsync(
    'antfill',
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antfill.ttf')
  );
}

export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    useAntDesign();
    setAppReady(true)
  }, [isAppReady]);

  if (!isAppReady) {
    return <AppLoading />;
  }

  return (
    <ANTProvider>
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
      </Provider>
    </ANTProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  todayDateContainer: {
    marginTop: Constants.statusBarHeight + 25,
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
