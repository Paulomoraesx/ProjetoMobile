import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Alert,
    Vibration
} from 'react-native';
import {Toolbar} from '../components/toolbar';
import {Button, Input, Image, CheckBox} from 'react-native-elements';
import Item from '../models/item';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export interface AppProps {
    navigation: any;
}


export interface AppState {
    item: Item;
    verificaCartao: boolean;
    verificaDinheiro: boolean;
}

export default class compraScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            verificaDinheiro: false,
            verificaCartao: false,
            item: this.props.navigation.getParam('item', new Item('', '', ''))
        }
    };

    public confirmarCompra() {
        Vibration.vibrate([
            100,
            300,
            70,
            350,

        ]);
        Alert.alert(
            'Confirmação de compra!',
            'Sua compra foi concluida com sucesso, assim que sua pizza estiver pronta, ela será enviada!',
            [
                {text: 'Ok', onPress: () => this.props.navigation.navigate("cardapio")}
            ]
        )
    }

    public verificarMeotodoDePagamento() {

    }


    public render() {
        return (
            <ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')} style={styles.background}>

                <Toolbar navigation={this.props.navigation} titulo="Voltar" back/>

                <View style={styles.viwe01}>
                    <Text style={styles.textoCarrinho}>Preencha os campos para finalizar sua compra!!</Text>
                    <Text style={styles.textoDescricao}>Endereço de entrega:</Text>
                    <Input placeholder="Endereço"/>
                    {/*}    <Input disabled value={this.state.item.nome}/>*/}
                    <Text style={styles.textoDescricao}>Forma de pagamento:</Text>
                    <CheckBox onPress={() => {
                        this.setState({verificaCartao: !this.state.verificaCartao})
                        if (this.state.verificaDinheiro) this.setState({verificaDinheiro: false})
                    }}
                              checked={this.state.verificaCartao} title={"Cartão"}/>
                    <CheckBox onPress={() => {
                        this.setState({verificaDinheiro: !this.state.verificaDinheiro})
                        if (this.state.verificaCartao) this.setState({verificaCartao: false})
                    }}
                              checked={this.state.verificaDinheiro} title={"Dinheiro"}/>
                    {this.state.verificaDinheiro && <View>
                        <Text>Troco para quanto ?</Text>
                        <Input placeholder="Troco"/>
                    </View>}
                </View>
                <View style={styles.view02}>
                    <Button buttonStyle={styles.botao} title="Confirmar Compra" onPress={() => this.confirmarCompra()}/>
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
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    textoCarrinho: {
        color: '#FF6347',
        fontSize: 22,
        padding: 10,
        textAlign: "center",
        margin: 10,
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