import React from 'react';
import {
    View,
    Text,
    Image
    } from 'react-native';




export default class SantaAnimation extends React.Component{
render(){
    return(
        <Image 
        source={require('../assets/book.gif')}
        style={{width:80,height:80}}
        />
    )
}

}