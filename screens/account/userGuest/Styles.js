import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    viewBody : {
        marginHorizontal : 30
    },
    image : {
        height : 150, 
        width : "100%",
        marginBottom : 10, 
        marginTop : 10
    },
    title : {
        fontWeight : "bold",
        fontSize : 19,
        marginBottom : 10,
        textAlign : "center"
    },
    description :{        
        color : "#9f632a"
    },
    button: {
        height : 48,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#fbce24",
        /* borderColor: "#FFFFFF", */
        color:"#9f632a",        
        borderRadius: 15
    },
    divider: {
        marginVertical: 18,
        borderBottomColor: '#9f632a',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})