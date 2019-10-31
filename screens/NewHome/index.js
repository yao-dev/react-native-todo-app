import React, { useState } from 'react';
import { Animated, FlatList, PanResponder, Platform, SafeAreaView, StatusBar, Text, UIManager, View } from 'react-native';
import { DEVICE_WIDTH } from '../../common/constants';
import AddModal from '../../components/AddModal';
import Icon from '../../components/Icon';
import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const valueX = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      // gestureState.d{x,y} will be set to zero now
      // valueX.setValue(0)
    },
    onPanResponderMove: (evt, gestureState) => {
      valueX.setValue(gestureState.dx < 0 && gestureState.dx)
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // Animated.timing(valueX, {
      //   toValue: 0,
      //   timing: 1000,
      // }).start()
    },
    onPanResponderTerminate: (evt, gestureState) => {
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      return true;
    },
  });

  const int = valueX.interpolate({
    inputRange: [-100, 0],
    outputRange: [-75, 0],
    extrapolate: 'clamp'
  })

  const scaleIcon = valueX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })



  return (
    <SafeAreaView style={styles.container}>
      {/* STATUS BAR */}
      <StatusBar barStyle='light-content' />

      <FlatList
        data={[0,0,0,0]}
        keyExtractor={(v, i) => i.toString()}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          return (
            <View style={{ position: 'relative' }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 10,
                  width: DEVICE_WIDTH - 20,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  marginTop: isFirst ? 10 : 5,
                  marginBottom: 5,
                  shadowColor: 'grey',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 5
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <View style={{ width: 75 }}>
                    <Icon
                      style={{
                        textAlign: 'center',
                        transform: [{
                          scale: scaleIcon
                        }]
                      }}
                      moduleName='MaterialIcons'
                      name='delete'
                      size={30}
                      color='grey'
                    />
                  </View>
                </View>
              </View>
              <Animated.View
                {...panResponder.panHandlers}
                style={{
                  position: 'relative',
                  // top: 0,
                  left: int,
                  width: DEVICE_WIDTH - 20,
                  height: 100,
                  backgroundColor: 'white',
                  padding: 15,
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginTop: isFirst ? 10 : 5,
                  marginBottom: 5,
                  shadowColor: 'grey',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 5
                }}
              >
                <Text>Title</Text>
                <Text>User can touch and move the frontmost card on the X-axis. When user releases touch, rearrange the card stack in an animated fashion, wherein, each card displayed moves forward and the initial frontmost card moves to the back.</Text>
              </Animated.View>
            </View>
          )
        }}
      />

      {/* MODAL */}
      <AddModal
        type='category'
        open={modalOpen}
        close={() => setModalOpen(false)}
      />
    </SafeAreaView>
  );
}
