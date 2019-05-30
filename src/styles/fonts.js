import { Platform } from 'react-native';

export default {
  PRIMARY_LIGHT: Platform.select({ ios: 'Montserrat-Light', android: 'Montserrat Light' }),
  PRIMARY_REGULAR: Platform.select({ ios: 'Montserrat-Regular', android: 'Montserrat Regular' }),
  PRIMARY_SEMI_BOLD: Platform.select({
    ios: 'Montserrat-SemiBold',
    android: 'Montserrat SemiBold',
  }),
  SIZE_BIGGER: 20,
  SIZE_BIG: 18,
  SIZE_REGULAR: 16,
  SIZE_SMALL: 14,
  SIZE_SMALLER: 12,
};
