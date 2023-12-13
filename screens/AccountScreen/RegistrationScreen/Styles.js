import { StyleSheet } from "react-native"
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
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
    paddingRight: 30,
  },
  textInput:{

  },
  button: {
    height: 48,
    /* borderRadius: 5, */
    /* backgroundColor: "#788eec", */
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#442484",
    borderColor: "#FFFFFF",
    borderRadius: 15
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
});
