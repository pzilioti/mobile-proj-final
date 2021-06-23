import React, { useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import Product from '../../components/Product';
import { getList } from './action';
import styles from './styles';

export default function ListProductPage({ route }: any) {

    const [ products, setProducts ] = useState();
    const [ token, setToken ] = useState("");

    React.useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        try {
            const tokenParam = route.params['token']
            if(tokenParam !== null){
                setToken(tokenParam)
            }
            const data = await getList(token)
            if(data != null){
                setProducts(data)
            }
        } catch (error) {
            console.log(error)   
        }
    }

    if (products != null){
        return ( 
            <>      
                <View style={styles.header}>
                    <Text style={styles.headerText}>Item</Text>
                    <Text style={styles.headerText}>Valor</Text>
                    <Text style={styles.headerText}>Quantidade</Text>
                </View>
                <FlatList
                    data={products}
                    style={styles.list}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Product name={item.name} price={item.price} amount={item.amount} />
                    )}
                /> 
            </>
            );
    }else{
        return(<Text>Nada a exibir por aqui</Text>);
    }
        
   

}