import { Dimensions, Platform, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const metrics = {
  statusBarHeight: Platform.OS === 'android' ? 60 : 40,
  radius: 8,
  doubleMargin: 40,
  mediumMargin: 15,
  margin: 20,
  smallMargin: 10,
  inputHeight: 50,
  buttonHeight: 50,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const scale = metrics.screenWidth / 320;

export function normalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export default metrics;
