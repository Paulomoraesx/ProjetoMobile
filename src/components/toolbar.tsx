import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export interface AppProps {
    titulo:any;
    navigation?:any;
    menu?:boolean;
    back?:boolean;

}

export function Toolbar (props: AppProps) {
    let lc = null
 
if(props.back)

lc = <TouchableOpacity onPress={()=> props.navigation.goBack()}>
    <Icon name="arrow-back" color="white"/>
</TouchableOpacity>
if(props.menu)
lc = <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>
     <Icon name="menu"></Icon>
     </TouchableOpacity>
    return (
      <Header containerStyle={{backgroundColor:'#FF6347'}}
      leftComponent={lc} 
      centerComponent={{text:props.titulo, style:{color:'white', fontSize: 30}}}/>
    );
}
const styles = StyleSheet.create({
    
    

})
