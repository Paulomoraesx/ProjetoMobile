import * as React from 'react';
import { View, StyleSheet, Text, ToastAndroid, ImageBackground, } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Toolbar } from '../components/toolbar';
import Item from '../models/item';
import { ItemDescricao } from '../components/item-descricao';
import { SwipeRow } from 'react-native-swipe-list-view';
import { FlatList } from 'react-native-gesture-handler';
import firebase from "firebase";
import { pizzaProvider } from './../providers/pizza'


export interface Props {
    navigation:any;

}
export interface AppState {
  itens:Item[];
  email:string;
  nome:string;
}

export default class CardapioScreen extends React.Component<Props, AppState> {
    private pizzaProvider = new pizzaProvider();
  constructor(props: Props) {
    super(props);
    this.state = {
        itens:[],
        email:firebase.auth().currentUser.email,
        nome:firebase.auth().currentUser.displayName,


    };
  }


   componentDidMount(): void {
      this.listarTodos();
      /*console.disableYellowBox = true;*/
       console.ignoredYellowBox = [
           'Setting a timer'
       ];
    }

    public listarTodos(){
        this.pizzaProvider.buscarTodos().then(itens => {this.setState({itens})});
    }



  public render() {
    return (
    <ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')} style={styles.background}>

        <Toolbar titulo="Cardapio" menu={true} navigation={this.props.navigation}/>
        <View style={styles.caixaBemVindo}>
        <Text style={styles.bemVindo}> Seja bem vindo!</Text>
            <Text style={styles.usuarioLogado}>{this.state.nome}</Text>
        </View>
        <View style={styles.container}>
        <FlatList 
                data={this.state.itens}
                extraData={this.state.itens}
                keyExtractor={(t) => t.id}
                renderItem={({item}) => (
                <ItemDescricao item={item} 
                carrinho={(item)=>this.props.navigation.navigate('itemEscolhido',{item})}
                onExcluir={(id)=>console.log(id)}/>
        )}
       />
             </View>
              <View>
          <Button title="Voltar" buttonStyle={styles.botoes} onPress={()=>this.props.navigation.navigate("login")}/>
          {/*<Button title="teste" buttonStyle={styles.botoes} onPress={()=>this.listarTodos()}/>*/}
              </View>

      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  background: {
      width: '100%',
      height: '100%'
      },
      container:{
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
      },
      caixaBemVindo:{
        backgroundColor:'#FF6347',
        borderRadius: 20,
        margin: 20, 
      },
    usuarioLogado:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
      bemVindo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        padding: 10,
      },
      botoes:{
        padding: 10,
        borderRadius: 10, 
        marginHorizontal:50,
          marginTop: 20,
          marginBottom: 10,
        backgroundColor: '#FF6347',
      }

      
});
