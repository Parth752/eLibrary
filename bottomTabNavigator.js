import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './transaction';
import SearchScreen from './search';

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Transaction" Component = {TransactionScreen}/>
                    <Tab.Screen name = "Search" Component = {SearchScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}