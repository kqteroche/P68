import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Link } from 'react-router';

export default class FacebookScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 90 }}>

          <Text style={{ textAlign: 'center', color: 'white', fontSize: 40 }}>
            {' '}
            FACEBOOK{' '}
          </Text>

          <Image
            source={require('../assets/facebook.png')}
            style={{
              width: 100,
              height: 100,
              marginTop: 30
            }}
          />
        </View>
      </View>
    );
  }
}
