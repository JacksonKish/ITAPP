import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image  } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'lato-regular': require('../assets/Lato-Regular.ttf'),
    });
    /*
    not sure why error here maybe this?
    */
    this.setState({ fontLoaded: true })
  }

  state = {
    input: "",
    fontLoaded: true
  }

  render() {

    if(this.state.fontLoaded) return <View style={styles.MainPart}>
        <Text style={styles.Text_1}>SBU Where?</Text>
        <TouchableOpacity style={styles.TouchableOpacity_2}>
            <Text style={styles.Text_3}>Start!</Text>
        </TouchableOpacity>
        <Image source={[{"uri":"https://keypathedu.com/sites/default/files/styles/banner_media/public/image/2018-08/SBU%20campus.jpg?h=502e75fa&itok=qeAyEgtK"}]} 
        style={styles.Image_5}></Image>
    <Text style={styles.Text_6}>Created by Michael Kneis Jackson Kish Daniel Nelligan and Barry Gan</Text>
    </View>
    else return null 

  }
}

const styles = StyleSheet.create({
  MainPart:{flex:1, backgroundColor: "#fdb726"},
  Text_1:{color:"#000000", fontFamily:"lato-regular", fontSize:37, textAlign:"center", top:"10%", },
  TouchableOpacity_2:{height:60, width:261, backgroundColor:"#8B4513", top:"64%", alignSelf:"center", borderWidth:1, borderColor:"#000000", },
  Text_3:{color:"#000000", fontFamily:"lato-regular", fontSize:38, textAlign:"center", },
  Image_5:{height:"39%", width:"69%", resizeMode:"stretch", top:65, left:"15%", borderWidth: 1},
  Text_6:{color:"#000000", fontFamily: "lato-regular", fontSize: 10, top: 300, textAlign: "center"}
});
