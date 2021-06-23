import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles'


export default function Product(props: any) {
    let { name, price, amount } = props;
    amount = amount.toString()
    price = price.toString()

    return (
        <View style={styles.container} >
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{price}</Text>
            <Text style={styles.text}>{amount}</Text>
        </View>
    );

}