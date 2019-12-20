import React, { Component } from "react";

import {
    Text, View, Image, TouchableOpacity, Animated, StyleSheet, ScrollView
} from 'react-native';
import { openAddLocation } from "../../navigation/navigation"
import metrics from "../../functions/metrics";
import Modal from "react-native-modal";

import User from '../../functions/User'

export default class DetailScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            isModalVisible: false
        };

    }





    render() {


        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                backgroundColor: 'whitesmoke'
            }}>

                <TouchableOpacity onPress={() => { openAddLocation() }} style={{ alignSelf: 'center' }}>
                    <View style={{ width: 100, height: 50, backgroundColor: 'red' }}></View>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({


});
