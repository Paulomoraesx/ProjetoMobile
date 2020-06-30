import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Item from '../models/item'
import { SwipeRow } from 'react-native-swipe-list-view';
import { Button } from 'react-native-elements';

export interface AppProps {
    item:Item;
    carrinho(item:Item);
    onExcluir(id:string);


}
export function ItemDescricao (props: AppProps){
    return(

        <View style={styles.container}>
            <Text style={styles.texto}>{props.item.nome}</Text>
            <Text style={styles.texto}>{props.item.preco}</Text>
            <View style={styles.view01}>
            <Button title="Comprar" 
            buttonStyle={styles.carrinho} 
            titleStyle={styles.btn} 
            onPress={()=>props.carrinho(props.item)}/>
{/*            <Button title="Excluir" 
            buttonStyle={styles.btnExcluir} 
            titleStyle={styles.btn} 
            onPress={()=>props.onExcluir(props.tarefa.id)}/>
    */}
        </View>
        </View>

    );
}
const styles = StyleSheet.create({

    container:{
        borderWidth: 2,
        flexDirection:'row',
        padding:15,
        borderRadius: 20,
        borderColor: 'white',
        borderBottomColor: '#FF6347',
        margin: 2,
    },
    view01:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    texto:{
        fontSize: 15,
        padding: 10,
        color: '#FF6347',

    },
    btn: { 
        color: 'white' },
        carrinho: {
        backgroundColor: '#FF6347',
        borderRadius: 10,
        width: 80,
        },
    btnExcluir: {
        backgroundColor: 'red',
        width:60,
        borderRadius:0},
});

