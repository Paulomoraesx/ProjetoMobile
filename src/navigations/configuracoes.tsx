import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ConfigGeralSscreen from './../screen/config/geral'
import ConfigInfoScreen from './../screen/config/info'
import { Icon } from 'react-native-elements'

export const configNavigation = createBottomTabNavigator({
    geral:{
        screen:ConfigGeralSscreen,
        navigationOptions:{
            title: 'Geral',
            tabBarIcon: <Icon name="settings"/>
        }
        
    },
    info:{
        screen: ConfigInfoScreen,
        navigationOptions:{
            title:'Informações',
            tabBarIcon: <Icon name='person'/>
        }
    }
})