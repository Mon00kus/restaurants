import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'


export default function Loading({ isVisible, text}) {
  return (
   /*  <Overlay 
        isVisible = {isVisible}
        windowBackgroundColor = "rgba(0,0,0,0.5)"
        overlayBackgroundColor = "transparent"
        overlayStyle={styles.overlay}
    >
        <View>
            <ActivityIndicator/>
            {
                text && <Text>{text}</Text>
            }
        </View>
    </Overlay> */
    <Text>
        Cargando...
    </Text>    
  )
}

const styles = StyleSheet.create({
    overlay : {
        height : 100,
        width : 200,
        backgroundColor : "#fff",
        borderColor : "#442484",
        borderWidth : 2,
        borderRadius : 10
    }
})