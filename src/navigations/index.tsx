import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screens from 'screens';
import {Header} from 'components';

const Stack = createStackNavigator();

export function appNavigation({navigation}: any) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fcc019',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Screens.LoginScreen}
        options={{
          headerTitle: props => <Header.Title {...props} />,
          headerLeft: () => <Header.Menu navigation={navigation} />,
          headerRight: () => <Header.Blank />,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Screens.SignupScreen}
        options={{
          headerTitle: props => <Header.Title {...props} />,
          headerLeft: () => <Header.Menu navigation={navigation} />,
          headerRight: () => <Header.Blank />,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Screens.HomeScreen}
        options={{
          headerTitle: props => <Header.Title {...props} />,
          headerLeft: () => <Header.Menu navigation={navigation} />,
          headerRight: () => <Header.Blank />,
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="App" component={appNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
