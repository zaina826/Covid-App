import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { red } from 'color-name';

const Header1 = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        header: {
            height: 60,
            padding: 15,
            backgroundColor: "darkslateblue"
        },
        text: {
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
        }
    }
)
export default Header1