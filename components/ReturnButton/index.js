import Icon from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default ReturnButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}
    >
      <Icon name='arrow-back' size={props.size} color='#303030' />
    </TouchableOpacity>
  )
}
