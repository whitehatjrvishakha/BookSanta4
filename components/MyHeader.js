import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Header} from 'react-native-elements'


const MyHeader=props=>{
    return(
        <Header
        centerComponent={{text:props.title , style:{color:"#34deaa" ,fontSize:20}}}
        backgroundColor="pink"
        />
    )
}

export default MyHeader;

