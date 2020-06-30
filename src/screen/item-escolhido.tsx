import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Toolbar } from '../components/toolbar';
import { Button, Input, Image } from 'react-native-elements';
import Item from '../models/item';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { pizzaProvider } from './../providers/pizza'
import item from "../models/item";
import {ScrollView} from "react-native-gesture-handler";


export interface AppProps {navigation:any;}


export interface AppState {
  item:Item;
}

export default class itemEscolhidoScreen extends React.Component<AppProps, AppState> {
  private pizzaProvider = new pizzaProvider();
  constructor(props: AppProps) {
    super(props);
    this.state ={ item:this.props.navigation.getParam('item', new Item('','',''))
  }};

  public testeCadastro(){
    let item = this.state.item;
    this.pizzaProvider.cadastrar(item);
  }
  
  public render() {
    return (
      <ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')} style={styles.background}>
      
      <Toolbar navigation={this.props.navigation} titulo="Voltar" back />
      <ScrollView>
      <KeyboardAvoidingView behavior='position' style={styles.viwe01}>
      <Text style={styles.textoDescricao}>Nome Da Pizza</Text>
      <Input disabled value={this.state.item.nome}/>
      <Text style={styles.textoDescricao}>Valor</Text>
      <Input disabled value={this.state.item.preco}/>
      <Text style={styles.textoDescricao}>O que vem na pizza:</Text>
      <Text style={styles.descricaoDaPizza}>{this.state.item.descricao}</Text>
      <Text style={styles.textoDescricao}>Quantidade Requerida:</Text>
      <Input placeholder="Quantidade das pizzas"/>
      </KeyboardAvoidingView>
      <View style={styles.view02}>
        <Button title="teste" buttonStyle={styles.botao} onPress={()=>this.testeCadastro()}/>
      <Button buttonStyle={styles.botao} title="Adicionar ao Carrinho" onPress={()=>this.props.navigation.navigate("carrinho")} />
      <Button buttonStyle={styles.botao} title="Voltar para o Cardápio" onPress={()=>this.props.navigation.navigate("cardapio")}/>
      </View>
      </ScrollView>
      </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    container: {
      flex:1
    },
    viwe01:{
      padding: 30,
      margin:10,
      backgroundColor: 'white',
      borderRadius: 25,
    },
    textoDescricao:{
      color: '#FF6347',
      fontSize:20,
      padding: 10,
    },
    img: {
      height: 300,
      width: 300
    },
    descricaoDaPizza:{
      padding: 15,
      fontSize: 18,
      color: 'gray'
    },
    view02:{
      margin:20
    },
    botao:{
      backgroundColor:'#FF6347',
      borderRadius: 15,
      padding: 10,
      margin: 5,
    },  
    botao2:{
      padding: 20,
      marginTop: 40,
    }
    
  });
  
  
  // async abrirCamera(){
  //   let permissao = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if(permissao.status == 'granted'){
  //       let foto:any = await ImagePicker.launchCameraAsync({
  //         allowsEditing: true,
  //         base64: true,
  //         aspect:[4,3],
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         quality: 0.6
  //       });
  //       if(!foto.cancelled){
  //         let {item} = this.state;
  
  //         item.imagem = 'data:image/jpeg;base64,' + foto.base64;
  
  //         this.setState({item})
  //       }
  //     }
  //   }
  
  {/* <TouchableOpacity onPress={this.abrirCamera.bind(this)}>
  <Image source={(this.state.item.imagem ? {uri:this.state.item.imagem} 
    : require('./../../assets/imgs/gatoChorando.jpg'))} style={[styles.img]} ></Image>
  </TouchableOpacity> */}