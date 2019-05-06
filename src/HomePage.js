import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image  } from 'react-native';
import { Font } from 'expo';
import QuestionPage from "./QuestionPage.js";
import { DrawerNavigator } from "react-navigation";
import App from "./App";
import {NavigationOptions} from 'react-navigation'
import styles from './styleSheet.css'


class HomeScreen extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'lato-regular': require('../assets/Lato-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true })
  }

  state = {
    input: "",
    fontLoaded: true
  }
  static navigationOptions ={
    headerStyle: {
    backgroundColor: "#8B4513"
  } 
  }

  render() {

    if(this.state.fontLoaded) 
    return <View style={styles.MainPart}>
     
  <TouchableOpacity style={styles.TouchableOpacity_2}onPress={() => this.props.navigation.navigate("Question")}> 
  <Text style={styles.Text_3}>Start!</Text>
  </TouchableOpacity>
      
  <Text style={styles.Text_1}>SBU Where?</Text>
    
  <Image source={[{"uri":"https://keypathedu.com/sites/default/files/styles/banner_media/public/image/2018-08/SBU%20campus.jpg?h=502e75fa&itok=qeAyEgtK"}]}        style={styles.Image_5}></Image>
    
  <Text style={styles.Text_6}>Created by Michael Kneis Jackson Kish Daniel Nelligan and Barry Gan</Text>
  </View>
    
    else return null 
  }
}
export default HomeScreen
