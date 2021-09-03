import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Instagramscreen extends React.Component {
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
            INSTAGRAM{' '}
          </Text>
          <Image
            source={require('../assets/insta.png')}
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
