import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'


export default class App extends React.Component {
  render(){
  return (
    <PaperProvider theme={theme}>
    <AppContainer/>
    </PaperProvider>
  );
}
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);