import React from 'react';
import { TextInput, View } from 'react-native';
import { iconDirectory } from '../../common/constants';
import globalStyles from '../../common/globalStyles';

export default Input = ({
  containerStyle,
  style,
  iconModule,
  iconName,
  iconPosition,
  iconColor = '#000',
  ...restProps
}) => {
  const Icon = iconDirectory[iconModule]

  return (
    <View
      style={[{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#303030',
        overflow: 'hidden'
      },
        containerStyle
      ]}
    >
      {iconModule && iconName && iconPosition === 'left' && (
        <View style={{ width: '8%' }}>
          <Icon name={iconName} size={20} color={iconColor} />
        </View>
      )}
      <TextInput
        {...restProps}
        style={[
          globalStyles.input,
          !iconName || !iconModule && { width: '100%' },
          style
        ]}
      />
      {iconModule && iconName && iconPosition === 'right' && (
        <View style={{ width: '8%' }}>
          <Icon name={iconName} size={20} color={iconColor} />
        </View>
      )}
    </View>
  )
}
