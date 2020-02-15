import React from 'react';
import { Animated } from 'react-native';
import { iconDirectory } from "../../common/constants";

export default class Icon extends React.Component {
  render() {
    const { moduleName, ...restProps } = this.props;
    const CustomIcon = Animated.createAnimatedComponent(iconDirectory[moduleName]);

    if (!CustomIcon) return null;

    return (
      <CustomIcon {...restProps} />
    );
  }
}
