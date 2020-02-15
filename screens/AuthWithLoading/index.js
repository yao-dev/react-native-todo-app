import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { isUserAuth } from '../../common/firebase';


export default AuthWithLoading = (props) => {
  useEffect(() => {
    isUserAuth({
      yes: () => props.navigation.navigate('Home'),
      no: () => props.navigation.navigate('Login'),
    });
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>My Todo</Text>
    </View>
  )
}
