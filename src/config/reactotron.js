import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import config from './index';

export default () => {
  if (__DEV__) {
    const tron = Reactotron.configure({ host: config.app.HOST_IP })
      .useReactNative()
      .use(reduxPlugin())
      .use(sagaPlugin())
      .connect();

    tron.clear();

    return tron;
  }
};
