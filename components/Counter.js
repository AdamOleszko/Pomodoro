import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import Styles from './StyleSheet';

export default class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={Styles.counter}>{('0' + this.props.minutes).slice(-2)}:{('0' + this.props.count).slice(-2)}</Text>
        )
    }
}