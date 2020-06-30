import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createSwitchNavigator} from 'react-navigation'
import LoginScreen from './../screen/login'
import CardapioScreen from '../screen/cardapio'
import CadastroScreen from './../screen/cadastro'
import { drawerMenuNavigation } from './drawer-menu'
import carrinhoScreen from '../screen/carrinho'
import compraScreen from '../screen/confirmar-compra'


const loginNavigation = createStackNavigator({
       'login':{
        screen:LoginScreen,
        navigationOptions:{headerShown:false}
    }, 'cadastro':{
        screen:CadastroScreen,
        navigationOptions:{headerShown:false}
    }, 'carrinho':{
        screen:carrinhoScreen,
        navigationOptions:{headerShown:false}
    }, 'compra':{
            screen:compraScreen,
            navigationOptions:{headerShown:false}
        }
    
})
const cardapioNavigation = createSwitchNavigator({
    'cardapio':drawerMenuNavigation, 'login':loginNavigation
        

},{initialRouteName:'login'})
export default createAppContainer(cardapioNavigation);