import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import clrs from '../utils/clrs';

const Artist = ({ url }) => {

  return (
    <View style = {styles.container}>
      <StatusBar barStyle = 'light-content' hidden   = {true} />
      <Text style = {styles.header}>Spoty</Text>

      <WebView
        style={{
          flex: 1,
        }}
        source={{
          uri: url,

        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: clrs.indianred,
  },



  header:{
    fontSize: 35,
    color:clrs.orangeyellow,
    paddingLeft:10,
    alignSelf: 'center',
    fontFamily: 'Satisfy-Regular',
    textShadowColor:clrs.black,
    textShadowRadius :1,
    textShadowOffset : {width: 1, height: 1 },

  }


});

export default Artist;
