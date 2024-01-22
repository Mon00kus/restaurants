import React from 'react'
import { Overlay } from 'react-native-elements'

import Styles from './Styles'

export default function Modal({isVisible, setVisible, children}) {
  return (
    <Overlay
        isVisible={isVisible}
        overlayStyle={Styles.overlay}
        onBackdropPress={()=>setVisible(false)}
    >
        {
            children
        }
    </Overlay>
  )
}