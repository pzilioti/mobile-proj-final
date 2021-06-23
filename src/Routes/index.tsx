import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import InicioPage from '../pages/Inicio';
import LoginPage from '../pages/Login';
import CadastrarPage from '../pages/Cadastrar';
import ListProductPage from '../pages/ListProduct';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={InicioPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Cadastrar" component={CadastrarPage} />
                <Stack.Screen name="Listar Produto" component={ListProductPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
