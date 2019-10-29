import React from 'react';
import { Text, View } from 'react-native';

export default Form = (props) => {
  return (
    <View>
      {props.formError ? <Text style={{ marginBottom: 5, color: 'red' }}>{props.formError}</Text> : null }
      {props.children}
    </View>
  );
}
