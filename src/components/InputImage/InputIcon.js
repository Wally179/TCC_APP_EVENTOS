import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

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
          style={[styles.input, this.props.style]}
          placeholderTextColor="#666"
          {...this.props}>
        </TextInput>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:"#fff",
    width:"90%",
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:15,
    padding:10,
    flexDirection: 'row',
    height:50,
  },

  icon: {
    alignSelf: 'center',
    paddingRight: 20,
    color: "#0D9D89"
  },

  input: {
    fontSize: 14,
    color: '#666',
    flex: 1
  }
})