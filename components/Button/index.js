import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
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
  const [isLoading, setLoading] = useState(false)
  const Icon = iconDirectory[iconModule];
  const renderChildren = () => {
    if (isLoading) return <ActivityIndicator size='small' color={props.color} />;

    return (
      <>
        {iconName && !iconPosition && (
          <View style={{ }}>
            <Icon name={iconName} size={20} color={iconColor} />
          </View>
        )}
        {iconName && iconPosition === 'left' && (
          <View style={{ }}>
            <Icon name={iconName} size={20} color={iconColor} />
          </View>
        )}
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
        setLoading(true)
        setTimeout(() => {
          onPress()
          setLoading(false)
        }, 2000)
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
