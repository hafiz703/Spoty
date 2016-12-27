import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  View,
  ListView
} from 'react-native';
import clrs from '../utils/clrs'
import ListItems from './ListItems'
import {searchFor} from '../utils/fetcher'
import {debounce} from 'lodash'

export default class Main extends Component {
  constructor(props){
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2,
    })


    this.state = {artists: dataSource}
  }

  renderRow  =(artist, sId, rId) => {
    const imageUrl = artist.images[0] ? artist.images[0].url :null
    const rowColor = rId%2 ? {backgroundColor: clrs.navygrey} :{backgroundColor: clrs.lighternavygrey}


    return(
      <View style={rowColor}>
        <ListItems index = {rId}
        text = {artist.name}
        imageUrl = {imageUrl}/>
      </View>
    )


  }
  render(){
    const {artists} = this.state
    return(
      <View style = {styles.container}>
        <StatusBar barStyle = 'light-content' hidden   = {true} />
        <Text style = {styles.header}>Spoty</Text>
        <TextInput style = {styles.searchBox}
          onChangeText = {this.makeQuery}/>
          <View style = {styles.listStyle}>
            <ListView dataSource = {artists}
            renderRow = {this.renderRow} />
          </View>
      </View>
    )
  }

  makeQuery = debounce(query => {
    searchFor(query).then(artists => {
      this.setState({
        artists :this.state.artists.cloneWithRows(artists),
      })
    })
    .catch((error)=>{
      throw error
    })
  },400)

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: clrs.indianred,
  },
  searchBox: {
    height:40,
    borderColor:clrs.black,
    borderWidth: 2,
    margin: 10,
    paddingLeft: 10,
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: "stretch",
    backgroundColor: clrs.white,
  },
  listStyle:{
    flex: 1,
    alignItems:'flex-start',
    // backgroundColor: clrs.navygrey,
    alignItems: "stretch",
    marginTop:5
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
