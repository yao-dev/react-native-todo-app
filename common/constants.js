import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export const iconDirectory = {
  MaterialIcons,
  Feather,
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons
}

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const KEYBOARD_OFFSET = STATUS_BAR_HEIGHT + 10;
export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
