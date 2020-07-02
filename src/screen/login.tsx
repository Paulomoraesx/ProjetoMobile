import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ToastAndroid, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';
import InputRound from './../components/input-round';
import { AlertCustom } from '../components/alert-custom';
import {InputRoundModal} from "../components/input-round-modal";
import firebase from "firebase";
import 'firebase/firestore';
import { pizzaProvider } from './../providers/pizza'
import item from "../models/item";
import {AdMobBanner, setTestDeviceIDAsync} from "expo-ads-admob";
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';


export interface AppProps {navigation:any;}

//Interface que define quais valores o state pode receber
export interface AppState {
    nome:string;
    email:string;
    senha:string;
    confirmarSenha:any;
    emailCadastrar?:string;
    senhaCadastrar?:string;
    modalVisivel:boolean;
    cadastro:{nome:string, email:string, senha:string};
  }
export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {cadastro:{nome:'', email:'', senha:''}, nome:'',email:'', senha:'', confirmarSenha:'', modalVisivel:false}
  }
  
  public logar() {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
          .then( async () => {
              this.teste();
              console.log(this.teste());
              this.props.navigation.navigate('cardapio');

          }).catch(erro => {
          ToastAndroid.show('Email ou senha incorreta', 3000);
      });
  }
  public fecharModal(){
    this.setState({modalVisivel:false})
  }
    public abrirModal(){
        this.setState({modalVisivel:true})
    }

  public cadastrar(){
      firebase.auth().createUserWithEmailAndPassword(this.state.cadastro.email, this.state.cadastro.senha)
          .then((usuario) =>{
              usuario.user.updateProfile({
                  displayName:this.state.cadastro.nome
              });
              ToastAndroid.show('Cadastrado com sucesso', 3000);
              this.fecharModal();
          }).catch(erro => {
              let mensagem ='';
              console.log(erro.code)
          switch (erro.code) {
              case 'auth/invalid-email' :mensagem = 'Email invalido'; break;
              case 'auth/email-already-in-use' : mensagem = 'Email já está sendo utilizado'; break;
              case 'auth/weak-passwork' :mensagem = 'Senha Muito Fraca'; break;
          }
              ToastAndroid.show(mensagem,3000);
      })

    //this.verificaEmail();
  }
public async teste() {
    let permissao = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(permissao.status == 'granted') {
        let token = await Notifications.getExpoPushTokenAsync();
        firebase.firestore()
            .collection('usuarios')
            .doc(firebase.auth().currentUser.uid)
            .set({'deviceID':token})
    }
  }

  public verificaEmail(){
    var re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (re.test(this.state.email)) {
      this.verificarSenha();
      
  } else {
      ToastAndroid.show('Email invalido', 3000);
  }
}


  public verificarSenha(){
    if(this.state.senha == this.state.confirmarSenha){
      this.fecharModal();
      ToastAndroid.show('Cadastro efetuado com sucesso!!', 3000)
    }else{
      ToastAndroid.show('As senhas não estão iguais', 3000)

    }
  }
    async componentDidMount() {
        await setTestDeviceIDAsync("EMULATOR");
    }

  public render() {

    return (<ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')}
                style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.logo}>Rune Pizzas</Text>

                <InputRound placeholder="Digite seu Email" icone="person" onChangeText={(email) => this.setState({email})}/>
                <InputRound placeholder="Digite sua Senha" icone="lock"  onChangeText={(senha) => this.setState({senha})} isPassword />

                <Button title="Logar" onPress={() => this.logar()}  buttonStyle={{borderRadius:30, backgroundColor:'#FF6347'}} raised={true} />

                <TouchableOpacity onPress={()=> this.abrirModal()}>
                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                </TouchableOpacity>

                <AlertCustom titulo="Novo Usuário" 
                             visivel={this.state.modalVisivel}
                             onCancelar={()=> this.setState({modalVisivel:false})}
                             onConfirmar={()=> this.cadastrar()}>
                               <InputRoundModal placeholder="Nome" icone="person" onChangeText={(nome)=>this.setState({cadastro:{...this.state.cadastro, nome}})}/>
                               <InputRoundModal placeholder="Email" icone='email' onChangeText={(email)=>this.setState({cadastro:{...this.state.cadastro, email}})}/>
                               <InputRoundModal placeholder="Senha" icone='lock' onChangeText={(senha)=>this.setState({cadastro:{...this.state.cadastro, senha}})} isPassword/>
                             </AlertCustom>
            </View>
        <AdMobBanner bannerSize="smartBannerPortrait"
                     adUnitID="ca-app-pub-3940256099942544/6300978111"
                     testID="EMULATOR"/>

            </ImageBackground>)
    }
}
    
const styles = StyleSheet.create({
    background: {
    width: '100%',
    height: '100%'
    },
    container: {
    flex:1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    },
    btnRound: {
    borderRadius:30,
    },
    logo: {
    backgroundColor:'#FF6347',
    borderRadius:40,
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    marginBottom:50,
    },
    containerInput: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
    padding: 5,
    marginBottom: 5,
    },
    cadastrar: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
    margin: 30,
    textAlign: 'center'
    }
});
    