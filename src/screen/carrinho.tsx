import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Alert} from 'react-native';
import {Toolbar} from '../components/toolbar';
import {Button, Input, Image} from 'react-native-elements';
import Item from '../models/item';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export interface AppProps {
    navigation: any;
}


export interface AppState {
    item: Item;
}

export default class carrinhoScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item', new Item('', '', ''))
        }
    };

    public render() {
        return (
            <ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')} style={styles.background}>

                <Toolbar navigation={this.props.navigation} titulo="Carrinho"/>

                <View style={styles.viwe01}>
                    <Text style={styles.textoCarrinho}>Este é o seu Carrinho</Text>
                    <Text style={styles.textoDescricao}>Nome Da Pizza</Text>
                    <Text>Pizza de Calabresa</Text>
                    {/*}    <Input disabled value={this.state.item.nome}/>*/}
                    <Text style={styles.textoDescricao}>Valor</Text>
                    <Text>22</Text>
                    {/* <Input disabled value={this.state.item.preco}/> */}
                    <Text style={styles.textoDescricao}>Quantidade Requerida:</Text>
                    <Text>1</Text>
                </View>
                <View style={styles.view02}>
                    <Button buttonStyle={styles.botao} title="Confirmar Compra"
                            onPress={() => this.props.navigation.navigate("compra")}/>
                    <Button buttonStyle={styles.botao} title="Voltar para o Cardápio"
                            onPress={() => this.props.navigation.navigate("cardapio")}/>
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
    container: {
        flex: 1
    },
    viwe01: {
        padding: 30,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    textoCarrinho: {
        fontSize: 22,
        padding: 10,
        textAlign: "center",
        margin: 10,
        color: '#FF6347'
    },
    textoDescricao: {
        color: '#FF6347',
        fontSize: 20,
        padding: 10,
    },
    img: {
        height: 300,
        width: 300
    },
    descricaoDaPizza: {
        padding: 15,
        fontSize: 18,
        color: 'gray'
    },
    view02: {
        margin: 20
    },
    botao: {
        backgroundColor: '#FF6347',
        borderRadius: 15,
        padding: 10,
        margin: 5,
    },
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
  </TouchableOpacity> */
}