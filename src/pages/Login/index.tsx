import React from 'react';
import { useState } from 'react';
import { TextInput, Text, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import styles from './styles';
import { doLogin, validateData } from './action'

export default function LoginPage() {
    const navigation = useNavigation();

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    async function login (){
        if(validateData(name, password)){
            const data = await doLogin(name, password)
            if(data == null){
                Alert.alert("Login inválido")
            }else{
                navigation.navigate('Listar Produto', {token:data});
            }
        }else{
            Alert.alert("Dados inválidos")
        }
    }

    return (
        <>
            <Text style={styles.label}>Login</Text>
            <TextInput style={styles.input} onChangeText={setName} />
            
            <Text style={styles.label}>Senha</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} />

            <Button onPress={login} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Button>
            
        </>
    );

}