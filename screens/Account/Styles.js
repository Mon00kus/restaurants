import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
    /// Acount 
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
    },
    /// End Acount 
    /// Login
    container: {
        marginHorizontal: 20
      },
    input: {
        width: "90%",
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        paddingLeft: 16,
        paddingRight: 30
    },
    clearButton: {
        position: "absolute",
        top: 20,
        right: 18,
        zIndex: 1,
    },
    /// End Login
    /// Register
    logo: {
      flex: 1,
      height: 200,
      width: 180,
      alignSelf: "center",
        margin: 30,
    },
    inputContainer: {
        position: "relative",
        width: "80%",
        marginBottom: 20,
        marginLeft: 20,
    },

    buttonContainer:{
        marginTop: 20,
        width: "90%",
        alignSelf:"center"    
    },
    buttonTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    loginFooterText: {
        fontSize: 16,
        color: "#2e2e2d",
    },
    footerLinkRegistro: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center",
    },
    linkRegister: {
        color: "#442484",
        fontWeight: "bold",
    },
    clearButton: {
        position: "absolute",
        top: 20,
        right: 18,
        zIndex: 1,
    },
    showPassword : {
        position: "absolute",
        top: 20,
        right: 45,
        zIndex: 1,
    },
    iconContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    icon : {
        color: "#ffbc63"
    }  
    /// End Register
})