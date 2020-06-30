import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';


export interface AppProps {
    texto?:string;
    icone?:string;
    placeholder:string;
    onChangeText?(texto:string);
    isPassword?: boolean
    recebeTexto?(texto:string)
}

export default (props: AppProps) => (
    <View>
        {props.texto != null && <Text style={styles.labelInput}>{props.texto}</Text>}
        <Input placeholder={props.placeholder}  
            placeholderTextColor= '#FF6347'
            leftIcon={{name:props.icone, color:'#FF6347'}}
            inputContainerStyle={styles.containerInput}
            onChangeText={(texto) => props.onChangeText(texto)}
            secureTextEntry={props.isPassword}
            inputStyle={{color:'black'}} />
          
    </View>
)

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 30,
        padding: 5,
        marginBottom: 5,
        borderColor: 'white'
    },
    labelInput: {
        color: 'black',
        fontSize: 20
    }

});