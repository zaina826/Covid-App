import Axios from "axios";
import * as React from 'react';
import Logo from "./Covid19.png";
import Confirmedimg from "./confirmed.png";
import Recoveredimg from "./recovered.png";
import Deathimg from "./Death.png"
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, Button, ScrollView } from 'react-native';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    countries: [],
  }
  //We set a state with initial values that we can change later on after we get the 
  //proper info using the SetState method.
  componentDidMount() {
    this.getData();
  }
  //Automatically calls this function:
  async getData() {
    const resAPI = await Axios.get("https://covid19.mathdro.id/api")
    const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
    const countries = [];
    for (var i = 0; i < resCountries.data.countries.length; i++) {
      countries.push(resCountries.data.countries[i].name);
    }


    this.setState({
      confirmed: resAPI.data.confirmed.value,
      recovered: resAPI.data.recovered.value,
      deaths: resAPI.data.deaths.value,
      countries
      //changes the original state of countries which i an empty array to the new state 
      //which has the key for each country.
    })
  }
  async getCountryData(name) {
    const res = await Axios.get("https://covid19.mathdro.id/api/countries/" + name);
    this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value
    })
  }
  rendercountryoptions() {
    return this.state.countries.map((name) => {
      return <TouchableOpacity style={styles.Button1} ><Button
        title={name} color="white" onPress={() => this.getCountryData(name)}
        value={name} key={name} /></TouchableOpacity >
    });
  }
  //Async function because it is waiting (await) for a promise to be applied which is 
  // for axios to get the info in the link, then get the specific data needed.
  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.img} />
        <View style={styles.AllCases}>
          <View style={styles.flexDirection}>
            <View>
              <Text style={styles.font1} >Active cases</Text>
              <Text style={styles.font2}>{this.state.confirmed}</Text>
            </View>
            <Image source={Confirmedimg} style={styles.img2} />
          </View>

          <View style={styles.AllCases}>
            <View style={styles.flexDirection2}>
              <View>
                <Text style={styles.font1} >Recovered cases</Text>
                <Text style={styles.font2}>{this.state.recovered}</Text>

              </View>
              <Image source={Recoveredimg} style={styles.img3} />
            </View>

            <View style={styles.AllCases}>
              <View style={styles.flexDirection3}>
                <View>
                  <Text style={styles.font1} >Deaths</Text>
                  <Text style={styles.font2}>{this.state.deaths}</Text>

                </View>
                <Image source={Deathimg} style={styles.img4} />
              </View>
            </View>
            <Text style={styles.font3}>Select a country:</Text>
            <ScrollView style={styles.marginbottom}>
              {this.rendercountryoptions()}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
export default HomeScreen
const styles = StyleSheet.create({
  marginbottom: {
    marginBottom: 250,
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9F9"
  },
  header: {
    fontSize: 20,
    color: "pink",

  },
  Button1: {
    backgroundColor: "#D0D3D4",
    borderRadius: 30,
    marginBottom: 20,
    marginRight: 2,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,

  },
  Button: {
    color: "hotpink",
  },
  font1: {
    fontSize: 30,
    color: "white",
  },
  font2: {
    fontSize: 20,
  },
  font3: {
    marginLeft: 80,
    fontSize: 30,
    marginBottom: 5,
  },
  img: {
    width: 110,
    height: 110,
    margin: -30,
  },
  img2: {
    width: 70,
    height: 70,
    marginLeft: 90
  },
  img3: {
    width: 70,
    height: 70,
    marginLeft: 10
  },
  img4: {
    width: 70,
    height: 70,
    marginLeft: 70
  },
  flexDirection: {
    flexDirection: "row",
    backgroundColor: "powderblue",
    paddingTop: 12,
    padding: 2,
    width: 340,
    height: 90,
    borderRadius: 20,
    marginLeft: -26,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    marginLeft: 3
  },
  flexDirection2: {
    flexDirection: "row",
    backgroundColor: "#F4D03F",
    paddingTop: 12,
    padding: 2,
    width: 300,
    height: 90,
    borderRadius: 20,
    marginLeft: -26,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    marginLeft: 3,

  },
  flexDirection3: {
    flexDirection: "row",
    backgroundColor: "#B03A2E",
    paddingTop: 12,
    padding: 2,
    width: 260,
    height: 90,
    borderRadius: 20,
    marginLeft: -26,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    marginLeft: 3,

  }

});