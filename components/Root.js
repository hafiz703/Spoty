import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import Main from './Main'
import Artist from './Artist'
export default class Root extends Component {
  render() {
    return (
    // <Main />
    <Navigator
      initialRoute ={{
        id:'MAIN'
      }}
      renderScene={
        this.navigatorRenderScene
      }
     />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    if (route.id === 'MAIN') {
      return <Main navigator={ navigator } />;
    }

    return <Artist url={ route.url } />;
  }
}
