import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';

export default class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
