import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import clrs from '../utils/clrs'


const placeholder = require('../utils/placeholder.png')

const ListItems = ({text,imageUrl}) => {

  const image  = (
    imageUrl ? {uri : imageUrl} : placeholder

  )

  return(
    <TouchableOpacity
    underlayColor = {clrs.gray}>

      <View style  = {styles.mediaObject}>
        <Image source = {image} style = {styles.image} />

        <Text style = {styles.text} > {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mediaObject:{
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },

  text:{
    flex:1,
    fontSize: 25,
    color:clrs.orangeyellow,
    fontFamily:'ArimaMadurai-Regular',
    paddingLeft:10,
    paddingBottom:15,
    paddingTop:20,
  },

  image:{
    backgroundColor: clrs.gray,
    width:100,
    height:100,
    marginRight:16,
    marginLeft: 16,
  },

})

export default ListItems
