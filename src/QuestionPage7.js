import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image  } from 'react-native';
import { Font } from 'expo';
import { DrawerNavigator } from "react-navigation";

export default class QuestionPage7 extends React.Component {

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

    const styles= {
        MainPart:{flex:1, backgroundColor: "#fdb726"},
        Text_1:{color:"#000000", fontFamily:"Lato", fontSize:26, textAlign:"center", top:"60%",},
        Image_2:{height:"50%", width:"86%", borderWidth:2, resizeMode:"stretch", alignSelf:"center", },
        TouchableOpacity_3:{height:"7%", width:"35%", backgroundColor:"#99531A", position:"absolute", top:"72%", left:"13%", borderWidth : 1 },
        Text_7:{color: "#FFFFFF", fontFamily:"Lato", fontSize:22, textAlign:"center", top:"25%",},
        TouchableOpacity_4:{height:"7%", width:"35%", position:"absolute", top:"72%", left:"57%", backgroundColor:"#99531A", borderWidth: 1},
        Text_8:{color:"#FFFFFF", fontFamily:"Lato", fontSize:22, textAlign:"center", top:"25%", },
        TouchableOpacity_5:{height:"7%", width:"35%", position:"absolute", top:"85%", left:"57%", backgroundColor:"#99531A", borderWidth:1},
        Text_10:{color:"#FFFFFF", fontFamily:"Lato", fontSize:22, textAlign:"center", top:"25%", },
        TouchableOpacity_6:{height:"7%", width:"35%", backgroundColor:"#99531A", position:"absolute", top:"85%", left:"13%", borderWidth: 1},
        Text_9:{color:"#FFFFFF", fontFamily:"Lato", fontSize:22, textAlign:"center", top:"25%", },
    }

    return    <View style={styles.MainPart}>
        <Text style={styles.Text_1}>What building is this?</Text>
        <Image source={[{"uri":"https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/overview_images/2716_st_bonaventure_university_01.jpg"}]} style={styles.Image_2}></Image>
        <TouchableOpacity style={styles.TouchableOpacity_3}>
            <Text style={styles.Text_7}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity_4}>
            <Text style={styles.Text_8}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity_5}
            onPress = {() => this.props.navigate("QuestionPage")}>
            <Text style={styles.Text_10}>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity_6}>
            <Text style={styles.Text_9}>Option</Text>
        </TouchableOpacity>
    </View>

}

}
