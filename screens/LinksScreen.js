import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import coverimg from "./cover.png";
import sickimg from "./sick.png";
import img5 from "./hangd.gif";
import home from "./home.png";
import distanceimg from "./distance.png";
import washinghands from "./washinghands.png"
import { StyleSheet, Text, View, Image, Link } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
export default function LinksScreen() {
  return (
    <ScrollView style={Styles.scrv} >
      <View style={Styles.container} >

        <Image source={img5} style={Styles.Hand} />
        <Text style={Styles.Text1}>The 5 rules of prevention</Text>

        <View style={Styles.component}>
          <Image source={home} style={Styles.home} />
          <Text style={Styles.Text2}>#Stay home, Save lives</Text>
        </View>
        <View style={Styles.component}>
          <Image source={distanceimg} style={Styles.distance} />
          <Text style={Styles.Text2}>Keep a safe distance</Text>
        </View>
        <View style={Styles.component}>
          <Image source={washinghands} style={Styles.distance} />
          <Text style={Styles.Text2}>Wash hands often</Text>
        </View>
        <View style={Styles.component}>
          <Image source={coverimg} style={Styles.distance} />
          <Text style={Styles.Text2}>Cover your cough</Text>
        </View>
        <View style={Styles.component}>
          <Image source={sickimg} style={Styles.distance} />
          <Text style={Styles.Text2}>Sick? Call for help</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const Styles = StyleSheet.create({
  scrv: {
    backgroundColor: "white",
  },
  size: {
    width: 100,
    height: 100,
    marginLeft: 5
  },
  Hand: {
    height: 100,
    width: 100,
    marginLeft: 130,
    marginRight: 130,
  },
  Text2: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  component: {
    alignSelf: "center",
    backgroundColor: "#F4A460",
    borderRadius: 30,
    width: 350,
    height: 100,
    padding: 20,
    margin: 10,
    flexDirection: "row",
  },
  home: {
    height: 85,
    width: 85,
    marginRight: 5,
  },
  distance: {
    height: 75,
    width: 75,
    marginRight: 15,
    marginTop: -12,
    marginLeft: 10,
  },
  container: {
    flexDirection: "column",
    alignSelf: "center",
  },
  Text1: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "space-mono"
  }

})