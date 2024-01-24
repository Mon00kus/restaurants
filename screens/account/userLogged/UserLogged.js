import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { closeSession, getCurrentUser } from "../../../utils/Actions";
import Loading from "../../../components/Loading/Loading";
import InfoUser from "../../../components/infoUser/InfoUser";
import AccountOptions from "../accountOptions/AccountOptions";

import Styles from "./Styles";

export default function UserLogged() {
  const toastRef = useRef();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [user, setUser] = useState(null);
  const [reloadeUser, setReloadUser] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    setReloadUser(false);
  }, [reloadeUser]);

  return (
    <View style={Styles.container}>
      <KeyboardAwareScrollView centerContent={true}>
        {user && (
          <View>
            <InfoUser
              user={user}
              setLoading={setLoading}
              setLoadingText={setLoadingText}
            />
            <AccountOptions 
              user={user} 
              toastRef={toastRef} 
              setReloadUser={setReloadUser}
            />
          </View>
        )}
        <Button
          buttonStyle={Styles.button}
          title="Cerrar session"
          onPress={() => {
            closeSession();
            navigation.navigate("restaurants");
          }}
        />
      </KeyboardAwareScrollView>
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
    </View>
  );
}
