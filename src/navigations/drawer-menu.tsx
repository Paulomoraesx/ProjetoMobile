import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import CardapioScreen from '../screen/cardapio'
import LoginScreen from './../screen/login'
import ConfigScreen from './../screen/config/geral'
import {Icon} from 'react-native-elements'
import {View, Text} from 'react-native';
import {configNavigation} from './configuracoes';
import {itemNavigation} from './itemNavigation';

export const drawerMenuNavigation = createDrawerNavigator({
    item: {
        screen: itemNavigation,
        navigationOptions: {
            title: ' Cardapio ',
            drawerIcon: <Icon name="home"
                              color={'#FF6347'}/>
        }
    },
    geral: {
        screen: configNavigation,
        navigationOptions: {
            title: ' Configurações ',
            drawerIcon: <Icon name="settings"
                              color={'#FF6347'}/>
        }
    },
    login: {
        screen: LoginScreen,
        navigationOptions: {
            title: ' Sair ',
            drawerLockMode: 'locked-closed',
            drawerIcon: <Icon name="arrow-back"
                              color={'#FF6347'}/>
        }
    }
}, {
    contentComponent: (props) => (
        <View>
            <DrawerItems {...props}/>
        </View>
    )
})