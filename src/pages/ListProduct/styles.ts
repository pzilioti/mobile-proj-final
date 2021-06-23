import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },

    title: {
        fontSize: 22,
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },

    titleButton: {
        marginHorizontal: 10,
    },

    header: {
        height: 40,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: 10
    },

    list: {
        padding: 10
    }

});