import { createStackNavigator } from "react-navigation-stack";
import CardapioScreen from "../screen/cardapio";
import itemEscolhidoScreen from '../screen/item-escolhido';

export const itemNavigation = createStackNavigator({
    'cardapio': {
        screen: CardapioScreen,
        navigationOptions: { headerShown: false}
    },
    'itemEscolhido': {
        screen: itemEscolhidoScreen,
        navigationOptions: {headerShown: false}
    }
})