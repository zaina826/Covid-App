import HomeScreen from "./HomeScreen"
import * as React from 'react';
import cough from "./cough.png";
import logo from "./qmark.png"
import cough2 from "./cough2.png";
import cough3 from "./cough3.png"
import RadioForm from 'react-native-simple-radio-button';
import bacteria from "./bacteria.jpg"
import {
    Image, Platform, StyleSheet, Text, TouchableOpacity, View, radio, Alert, Button,
    ScrollView
} from 'react-native';

var radio_props = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
];
var radio_props2 = [
    { label: 'True', value: 1 },
    { label: 'False', value: 0 }
];
var radio_props3 = [
    { label: 'COVID-19', value: 2 },
    { label: 'Sars-CoV-2', value: 1 },
    { label: 'Wuhan flu', value: 3 }
];
var radio_props4 = [
    { label: 'UV-C lamp', value: 1 },
    { label: 'hand sanitizer', value: 2 },
    { label: 'Soap and water', value: 3 }
];
var radio_props5 = [
    { label: 'Fever', value: 1 },
    { label: 'Blurred vision', value: 2 },
    { label: 'Sore throat', value: 3 },
    { label: 'Tiredness', value: 3 }
];
var radio_props6 = [
    { label: 'photo #1', value: 1 },
    { label: 'photo #2', value: 2 },
    { label: 'photo #3', value: 3 }
];
var radio_props7 = [
    { label: 'Tell an adult', value: 1 },
    { label: 'Not tell anyone', value: 2 },
];
var radio_props9 = [
    { label: 'Tummy', value: 1 },
    { label: 'Bones', value: 2 },
    { label: 'lungs and throat', value: 3 },
]
var radio_props10 = [
    { label: 'Bacteria', value: 1 },
    { label: 'Virus', value: 2 },
]



class Quiz extends React.Component {
    state = {
        value1: 0,
        correct1: 0,
        para: 0,
    }

    displayAlert = () => {
        const { value1, correct1, para } = this.state;
        const isCorrect = value1 === correct1;
        const alertMessage = isCorrect ? "Correct, " : "Not correct,";
        Alert.alert(alertMessage + para);
    };
    checkquestion = value => this.setState({ correct1: 0, value1: value, para: " spraying alcohol or chlorine all over your body will not kill viruses that have already entered your body. Alcohol and chlorine can be useful as surface disinfectants, but need to be used according to recommendations." }, this.displayAlert);
    checkquestion2 = value => this.setState({ correct1: 0, value1: value, para: " antibiotics do not work against viruses, only bacteria." }, this.displayAlert);
    checkquestion3 = value => this.setState({ correct1: 1, value1: value, para: " Sars-CoV-2 is the correct name of the virus itself. The disease it causes to humans is called COVID-19" }, this.displayAlert);
    checkquestion4 = value => this.setState({ correct1: 3, value1: value, para: " Soap collapses the structure of the virus. therefore making it inactive, alcohol based sanitizers can help but are not as effective. Do not use UV-C lights on your body, it can do a lot of skin damage." }, this.displayAlert);
    checkquestion5 = value => this.setState({ correct1: 2, value1: value, para: "Blurred vision is not one of the symptoms,some of the symptoms are: a high fever, tiredness, dry cough, nasal congestion and more" }, this.displayAlert);
    checkquestion6 = value => this.setState({ correct1: 3, value1: value, para: "it's number 3, Always cover your mouth with your elbow when you cough" }, this.displayAlert);
    checkquestion7 = value => this.setState({ correct1: 1, value1: value, para: "it's really important to tell someone, so you and your family can be safe and happy." }, this.displayAlert);
    checkquestion9 = value => this.setState({ correct1: 3, value1: value, para: "COVID-19 affects your respritory system(lungs, throat, nose and others.)" }, this.displayAlert);
    checkquestion10 = value => this.setState({ correct1: 2, value1: value, para: "COVID-19 is a virus." }, this.displayAlert);
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.rounded}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.Text1}>Adult Quiz</Text>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.rounded2}>
                        <Text style={styles.Text2}>Take this quiz to test you
                         knowlege about COVID-19 facts and myths.</Text>
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.Text2}>Can spraying alcohol or chlorine all over your body kill COVID-19?</Text>
                        <RadioForm
                            radio_props={radio_props}
                            onPress={(value) => { this.checkquestion(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.Text2}> Antibiotics are effective in preventing and treating the new coronavirus. </Text>
                        <RadioForm
                            radio_props={radio_props2}
                            onPress={(value) => { this.checkquestion2(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.Text2}>What is the official name of the virus as designated by the world health organization</Text>
                        <RadioForm
                            radio_props={radio_props3}
                            onPress={(value) => { this.checkquestion3(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.Text2}>Which should you choose to clean your hands if all are available?</Text>
                        <RadioForm
                            radio_props={radio_props4}
                            onPress={(value) => { this.checkquestion4(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.Text2}>One of these is not a symptom of COVID-19 </Text>
                        <RadioForm
                            radio_props={radio_props5}
                            onPress={(value) => { this.checkquestion5(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>
                    <View style={styles.rounded}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.Text1}>Kids Quiz</Text>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.rounded2}>
                        <Text style={styles.Text2}>
                            Improve your kids' safety by educating them about COVID-19:
                        </Text>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.Text2}>How should you cough? </Text>
                        <RadioForm
                            radio_props={radio_props6}
                            onPress={(value) => { this.checkquestion6(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                        <View style={styles.pics}>
                            <Image
                                style={styles.coughs}
                                source={cough}
                            />
                            <Image
                                style={styles.coughs}
                                source={cough2}
                            />
                            <Image
                                style={styles.coughs}
                                source={cough3}
                            />
                        </View>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.Text2}>If you feel sick you should:</Text>
                        <RadioForm
                            radio_props={radio_props7}
                            onPress={(value) => { this.checkquestion7(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.Text2}>COVID-19 affects your:</Text>
                        <RadioForm
                            radio_props={radio_props9}
                            onPress={(value) => { this.checkquestion9(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.Text2}>Covid-19 is a:</Text>
                        <RadioForm
                            radio_props={radio_props10}
                            onPress={(value) => { this.checkquestion10(value) }}
                            formHorizontal={true}
                            labelHorizontal={false}
                            initial={-1}
                        />
                    </View>
                </View>
            </ScrollView >
        )
    }
}
export default Quiz
const styles = StyleSheet.create({
    pics: {
        flexDirection: "row",
    },
    coughs: {
        height: 100,
        width: 100,
    },
    container: {
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        backgroundColor: "#F8F9F9",
    },
    Text1: {
        color: "white",
        fontSize: 30,
        marginRight: 15,
        marginLeft: 15
    },
    Text2: {
        color: "black",
        fontSize: 18,
        marginBottom: 5,
    },
    rounded: {
        borderRadius: 30,
        backgroundColor: "#85C1E9",
        paddingLeft: 70,
        paddingRight: 70,
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 5,
        flexDirection: "row",
    },
    rounded2: {
        borderRadius: 30,
        backgroundColor: "#F2BF00",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    question: {
        margin: 10,
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        borderWidth: 10,
        borderColor: "#F2BF00",
        borderRadius: 30,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    logo: {
        width: 30,
        height: 30,
    }
})