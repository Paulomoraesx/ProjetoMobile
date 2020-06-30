import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export interface AppProps {
    titulo?: string;
    visivel: boolean;
    children:any;
    onConfirmar();
    onCancelar();
}

export function AlertCustom (props: AppProps) {
    return (
        <Modal visible={props.visivel} transparent animationType="slide">
        <View style={styles.modal}>
        <View style={styles.caixa}>
        {props.titulo &&<Text style={styles.titulo}>{props.titulo}</Text>}
        {props.children}
        <View style={styles.btn}>
        <Button buttonStyle={styles.btnModal} title="Fechar"  onPress={props.onCancelar}/>
        <Button buttonStyle={styles.btnModal} title="Confirmar" onPress={props.onConfirmar}/>
        </View>
        </View>
        </View>
        </Modal>
        );
    }
    const styles = StyleSheet.create({
        modal:{
            flex:1,
            justifyContent:'center',
            padding:20,
        },
        caixa:{
            backgroundColor:'white',
            padding: 20,
            borderRadius: 15,
        },
        titulo:{
            fontSize:20,
            color: '#FF6347',
        },
        btn:{
            margin: 10,
            flexDirection:'row',
            justifyContent:"flex-end",
        },
        btnModal:{
            margin: 5,
            padding: 7,
            backgroundColor: 'orange',
        }
    })