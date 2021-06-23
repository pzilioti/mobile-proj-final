import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import styles from './styles';

export default function InicioPage() {
    const navigation = useNavigation();

    function goLogin() {
        navigation.navigate('Login');
    }

    function goAddCustomer() {
        navigation.navigate('Cadastrar');
    }
    function goListProduct() {
        navigation.navigate('Listar Produto');
    }

    return (
        <>
            <Button onPress={goLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button onPress={goAddCustomer} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
            <Button onPress={goListProduct} style={styles.button}>
                <Text style={styles.buttonText}>Listar Produto</Text>
            </Button>
        </>
    );

}