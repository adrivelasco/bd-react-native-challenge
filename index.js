import { YellowBox, AppRegistry } from 'react-native';

import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
