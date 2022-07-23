import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
export default class InputWithIcon extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <View style={styles.inputContainer}>
        <TouchableWithoutFeedback>
          <Ionicons style={styles.icon} name={this.props.icon} size={25} color="#666" />
        </TouchableWithoutFeedback>
        <TextInput
          style={[styles.inputestilo, this.props.style]}
          placeholderTextColor="#666"
          {...this.props}>
        </TextInput>
      </View>
    )
  }
}

