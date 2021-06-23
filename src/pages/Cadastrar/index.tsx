import React from 'react';
import { useState } from 'react';
import { TextInput, Text, Alert, KeyboardAvoidingView, View, TouchableWithoutFeedback, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import styles from './styles';
import { doAdd, validateData, validateAge } from './action'

export default function CadastrarPage() {
    const navigation = useNavigation();

    const [ address, setAddress ] = useState('');
    const [ age, setAge ] = useState(0);
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    async function add (){
        if(!validateAge(age)){
            Alert.alert("Idade inválida")
            return
        }

        if(validateData(address, age, email, name, password)){
            const response = await doAdd(address, age, email, name, password)
            if(response.status !== 201){
                Alert.alert("Erro ao cadastrar")
            }else{
                navigation.navigate('Listar Produto', {token:response.data});
            }
        }else{
            Alert.alert("Dados inválidos")
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <View style={styles.inner}>
                
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} onChangeText={setAddress} />
                    
                    <Text style={styles.label}>Age</Text>
                    <TextInput keyboardType = 'numeric' style={styles.input} onChangeText={(inputAge) => setAge(parseInt(inputAge))} />

                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} />

                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} onChangeText={setName} />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
                
                    <Button onPress={add} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );

}