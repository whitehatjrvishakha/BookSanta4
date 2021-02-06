import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'



export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}/>
                </View>
            </View>
        )
    }
}


