import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

export default class AddScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Ingredients"
          onPress={() => this.props.navigation.navigate('Ingredients')}
        />
        <Button
          title="Recipes"
          onPress={() => this.props.navigation.navigate('Recipes')}
        />
      </View>
    );
  }
}
