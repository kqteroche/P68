import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './screen/fbScreen'
import instaScreen from './screen/igScreen'


export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK : {
    screen: fbScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/facebook.png")}
          style={{
            width: 30,
            height: 30
          }}
        />
      ),
      tabBarLabel: "FACEBOOK"
    }
  },
  INSTAGRAM: {
    screen: instaScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/insta.png")}
          style={{
            width: 30,
            height: 30
          }}
        />
      ),
      tabBarLabel: "INSTAGRAM"
    }
  }
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
