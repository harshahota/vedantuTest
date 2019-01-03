import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

var { height, width } = Dimensions.get('window');
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Overview</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});