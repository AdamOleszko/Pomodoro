import React, {Component, Dimensions} from 'react';
import {StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#423e3b',
    flexDirection: "column",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
title: {
  flex: 1,
  fontWeight: '700',
  fontSize: 42,
  color: '#f48f42',
  textAlign: 'center',
  textAlignVertical: "center",
    marginLeft: 10,
    marginRight: 10
},
subtitle: {
  fontSize: 28,
  color: 'white',
  textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
},
counter: {
  fontFamily: 'monospace',
  flex: 1,
  fontSize: 90,
  color: 'white',
  textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
},
breakButtons: {
  flex: 1,
  flexDirection: "row",
  width: '100%',
},

breakButton: {
  width:'50%',
  margin: 5,
  backgroundColor: '#f48f42',
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 1
},
workButton: {
  flexDirection: "row",
  width:'100%',
  backgroundColor: '#f48f42',
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  borderRadius: 10,
  margin : 5,
},
buttonLabel: {
  fontSize: 26,
  fontWeight: '700',
  textAlign: "center"
},
disabledBreakButton: {
  width:'50%',
  margin: 5,
  backgroundColor: '#aaa',
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 1
},
disabledWorkButton: {
  flexDirection: "row",
  width:'100%',
  backgroundColor: '#aaa',
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  borderRadius: 10,
  margin : 5
}
});
