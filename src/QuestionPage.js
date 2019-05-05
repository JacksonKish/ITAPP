import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image  } from 'react-native';
import { Font } from 'expo';
import { DrawerNavigator } from "react-navigation";
import questionStyles from './qStyleSheet.css'

class QuestionPage extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'lato-regular': require('../assets/Lato-Regular.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  state = {
    input: "",
    fontLoaded: false
  }

render() {

        return    <View style={questionStyles.MainPart}>
        
        <Text style={questionStyles.Text_1}>What building is this?</Text>
        
        <Image source={require ("./Campus Pics/Butler (3).JPG")} style={questionStyles.Image_2}></Image>
        <TouchableOpacity style={questionStyles.TouchableOpacity_3}>
            <Text style={questionStyles.Text_7}>Option</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={questionStyles.TouchableOpacity_4}>
            <Text style={questionStyles.Text_8}>Option</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={questionStyles.TouchableOpacity_5}
            onPress = {() => this.props.navigate("QuestionPage")}>
            <Text style={questionStyles.Text_10}>Option</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={questionStyles.TouchableOpacity_6}>
            <Text style={questionStyles.Text_9}>Option</Text>
        </TouchableOpacity>
    
    </View>

}

}
class genQuestions extends React.Component{

 selector = Math.floor(Math.random)

if (selector > 0 ){
  
}


pics = [
      {picture: "./CampusPics/Butler.jpg", answer: "Butler"},
      {picture: "./CampusPics/Devereux.jpg", answer: "Devereux"},
      {picture: "./CampusPics/Doyle.jpg", answer: "Doyle"},
      {picture: "./CampusPics/Friedsam.jpg", answer: "Friedsam"},
      {picture: "./CampusPics/Hall of Fame.jpg", answer: "Hall of Fame"},
      {picture: "./CampusPics/Quick.jpg", answer: "Quick"},
      {picture: "./CampusPics/Walsh.jpg", answer: "Walsh"},
      {picture: "./CampusPics/Richter.jpg", answer: "Richter"}
]


  
}


