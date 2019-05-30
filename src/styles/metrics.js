import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  SCREEN_WIDTH: width < height ? width : height,
  SCREEN_HEIGHT: width < height ? height : width,
  PADDING_SMALL: '5px',
  PADDING_MEDIUM: '10px',
  PADDING_LARGE: '20px',
  MARGIN_SMALL: '5px',
  MARGIN_MEDIUM: '10px',
  MARGIN_LARGE: '20px',
  RADIUS_MEDIUM: '5px',
  RADIUS_LARGE: '10px',
  INPUT_HEIGHT: '44',
};
