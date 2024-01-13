import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    form: {
        marginTop: 30,
    },
    input: {
        width: '100%'
    },
    button: {        
        height : 48,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fbce24",        
        color:"#9f632a",        
        borderRadius: 15
    },
    btnContainer: {
        marginTop: 10,
        width:  '95%',
        alignSelf: 'center'
    },
    clearButton: {
        position: "absolute",
        top: 20,
        right: 18,
        zIndex: 1,
    },
    icon : {
        color: "#ffbc63"
    }
})