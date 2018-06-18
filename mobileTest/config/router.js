import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import AddScreen from "../screens/AddScreen"
import IngredientsScreen from "../screens/IngredientsScreen"
import RecipesScreen from "../screens/RecipesScreen"

import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import SettingsScreen from "../screens/SettingsScreen"


export const AddStack = createStackNavigator({
  Add: AddScreen,
  Ingredients: IngredientsScreen,
  Recipes: RecipesScreen
});


export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: "Home"
}
);

export const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Add: AddStack,
    Settings: SettingsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Add') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default Root = createStackNavigator({
  Tabs: Tabs
})
