import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, ToastAndroid } from 'react-native';
import { Input, Button } from 'react-native-elements';
import InputRound from '../components/input-round';

export interface Props {
    navigation:any;
    nome:string;
    senha:string;
    email:any;
    confirmarSenha:any;
    
}

export default class CadastroScreen extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {nome:'', senha:'', email:'',confirmarSenha:''};
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
      this.cadastrar();
    }else{
      ToastAndroid.show('As senhas não estão iguais', 3000)

    }
  }

  public cadastrar(){
    ToastAndroid.show('Cadastrado com sucesso', 3000);
  }
  public voltar(){
    this.props.navigation.navigate('login');

  }

  public render() {
    return (
        <ImageBackground source={require('./../../assets/imgs/telapizzaria.jpg')} style={styles.background}>
      <View style={styles.container}>
          <Text style={styles.textoInicial}>Seja Bem vindo a área de cadastro.</Text>
          <InputRound placeholder="Nome" icone='person' onChangeText={(nome)=>this.setState({nome})}/>
          <InputRound placeholder="Email" icone='email' onChangeText={(email)=>this.setState({email})}/>
          <InputRound placeholder="Senha" icone='lock' onChangeText={(senha)=>this.setState({senha})} isPassword/>
          <InputRound placeholder="Senha" icone='lock' onChangeText={(confirmarSenha)=>this.setState({confirmarSenha})} isPassword/>

        
          <Button buttonStyle={styles.botoes} title='Cadastrar' onPress={()=> this.verificaEmail()}/>
          <Button buttonStyle={styles.botoes} title='Cancelar' onPress={()=> this.voltar()}/>

      </View>
      </ImageBackground> 
      )
  }
}
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
        },
    container:{
      flex:1,
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    botoes:{
      padding: 20, 
      borderRadius: 10, 
      margin:10,
      backgroundColor: '#FF6347'
    },
    textoInicial:{
      borderRadius:40,
      backgroundColor:'#FF6347',
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      padding: 20,
      marginBottom:10,
    }

});
