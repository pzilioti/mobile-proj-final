import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
    },

    button: {
        alignItems: 'center',
        padding: 10,
    },
    buttonText: {
        fontSize: 22
    },

    container: {
        flex: 1
    },

    view: {
        flex: 1,
        justifyContent: "space-evenly"
    },

      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
      },
      header: {
        fontSize: 36,
        marginBottom: 48
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
      },
      btnContainer: {
        backgroundColor: "white",
        marginTop: 12
      }
});