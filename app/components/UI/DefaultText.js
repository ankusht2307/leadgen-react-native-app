import React from 'react';
import { View } from 'react-native';

const DefaultText = (props) => {
  console.log(props.styles);
  return <View style={props.styles}>{props.children}</View>;
};

export default DefaultText;
