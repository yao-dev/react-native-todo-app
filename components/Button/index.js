import React from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { iconDirectory } from '../../common/constants';

export default Button = ({
  iconModule,
  iconName,
  iconPosition,
  iconColor,
  containerStyle = {},
  onPress = () => true,
  ...props
}) => {
  const Icon = iconDirectory[iconModule];
  const renderChildren = () => {
    if (props.isLoading) return <ActivityIndicator size='small' color={props.color} />;

    return (
      <>
        {/* LEFT ICON */}
        {iconName && iconPosition === 'left' || iconName && !iconPosition && (
          <View style={{ }}>
            <Icon name={iconName} size={20} color={iconColor} />
          </View>
        )}
        {/* BUTTON TEXT */}
        {typeof props.children === 'string' && (
          <Text
            style={{
              fontSize: 15,
              color: props.color,
              fontWeight: 'bold'
            }}
          >
            {props.children}
          </Text>
        )}
        {/* RIGHT ICON */}
        {iconName && iconPosition === 'left' && (
          <View style={{ }}>
            <Icon name={iconName} size={20} color={iconColor} />
          </View>
        )}
      </>
    )
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss()
        onPress()
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColor,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: props.large ? 40 : 20,
        borderRadius: props.large ? 40 : 30,
        shadowColor: props.shadowColor,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        ...containerStyle
      }}
    >
      {renderChildren()}
    </TouchableOpacity>
  )
}
