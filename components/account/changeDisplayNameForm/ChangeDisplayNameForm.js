import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { isEmpty } from "lodash";

import Styles from "./Styles";

export default function ChangeDisplayNameForm({ displayName, setShowModal, toastRef }) {

  const [newDisplayname, setNewDisplayName] = useState(null);
  const [error, setError] = useState(null);


  const onSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    console.log('Great!!');
  };

  const validateForm = () => {
    setError(null);

    if (isEmpty(newDisplayname)) {
      setError("Debes ingresar nombres y apellidos");
      return false;
    }

    if (newDisplayname === displayName) {
      setError("Debes ingresar nombres diferentes a los actuales");
      return false;
    }
    return true;
  };

  return (
    <View style={Styles.view}>
      <Input
        placeholder="Ingresa nombres y apellidos"
        containerStyle={Styles.input}
        defaultValue={displayName}
        onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
        errorMessage={error}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title="Cambiar nombres y apellidos"
        containerStyle={Styles.buttonContainer}
        buttonStyle={Styles.button}
        onPress={onSubmit}
      />
    </View>
  );
}
