import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

import styles from './Styles'

export default function Loading({ isVisible, text }) {
  return (
   <Overlay 
        isVisible = {isVisible}
        windowBackgroundColor = "rgba(0,0,0,0.5)"
        overlayBackgroundColor = "transparent"
        overlayStyle={styles.overlay}
    >
        <View style={styles.view}>
            <ActivityIndicator
                size = "large"
                color= "#442484"
            />            
            {
                text && <Text style={styles.text}>{text}</Text>
            }
        </View>
    </Overlay>
  )
}