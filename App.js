import { Provider as ANTProvider } from '@ant-design/react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import appStore from './appStore';
import Routes from './Routes';

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

export default App = () => {
  const [isAppReady, setAppReady] = useState(false);

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
        <Routes />
      </Provider>
    </ANTProvider>
  );
}
