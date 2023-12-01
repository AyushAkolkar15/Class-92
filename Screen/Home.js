import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Touchable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-web";

const appIcon = require("../assets/logo.png");

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          isEnabled: false,
          profile_image: "",
          name: ""
        };
}

async _loadFontsAsync() {
  await Font.loadAsync(customFonts);
  this.setState({ fontsLoaded: true });
}

componentDidMount() {
  this._loadFontsAsync();
}

render (){
    return(
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>

        <Text style={styles.appTitleTextContainer}>BookWorm</Text>
        <Image source={appIcon} style={styles.appIcon}/>
        </View>

    )
}
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#E3E4FA",
   // alignItems: "center",
    //justifyContent: "center"
  },
    appTitleTextContainer: {
    color: "#15193c",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    //fontColor:"#15193c",
    marginBottom: RFValue(0),
    marginLeft: RFValue(40)
  },
    appIcon: {
    width: RFValue(45),
    height: RFValue(405),
    resizeMode: "contain",
    marginBottom: RFValue(100),
    marginTop: RFValue(-224),
    marginLeft: RFValue(15)
  },
})