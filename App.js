import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// tells Expo to keep the app loading screen open if it is the first and only component rendered in your app
import { AppLoading } from 'expo';
// provides an Expo universal module to download assets and pass them into other APIs
import { Asset } from 'expo-asset'

// this component holds the app container created in index.js
import Navigation from './navigation/index'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  // cache all the images for better performance on the app
  handleResourcesAsync = async () => {
    // returns each image synced to cache download
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    
    // return cacheImages as a Promise
    return Promise.all(cacheImages);
  }

  // return AppLoading component based on isLoadingComplete state
  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true})}
        />
      )
    }

    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
});

// import all used images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/avatar.png'),
];
