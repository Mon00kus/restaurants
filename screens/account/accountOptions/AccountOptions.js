import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { map } from 'lodash'

import Modal from '../../../components/modal/Modal'
import ChangeDisplayNameForm from '../../../components/account/changeDisplayNameForm/ChangeDisplayNameForm'
import ChangeEmailForm from '../../../components/account/changeEmailForm/ChangeEmailForm'


import Styles from './Styles'
import ChangePasswordForm from '../../../components/account/changePasswordForm/ChangePasswordForm'

export default function AccountOptions({ user, toastRef, setReloadUser }) {

  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(false)
  
  const selectedComponent = (key) => {
    switch (key) {
     case "displayName":
       setRenderComponent(
         <ChangeDisplayNameForm
            displayName = { user.displayName }
            setShowModal = { setShowModal }
            toastRef = { toastRef }
            setReLoadUser={setReloadUser}
         />
       )
       break
     case "email":
       setRenderComponent(
         <ChangeEmailForm
            email={user.email}
            setShowModal={setShowModal}
            toastRef={toastRef}
            setReLoadUser={setReloadUser}
         />
       )
       break
     case "password":
       setRenderComponent(
        <ChangePasswordForm 
            setShowModal={setShowModal}
            toastRef={toastRef}
        />
       )
       break    
    }
    setShowModal(true)
  }
  
  const generateOptions = () => {
    return [
      {
        title : "Cambiar Nombres y Apellidos",
        iconNameLeft : "account-circle",
        iconColorLeft : "#a7bfd3",
        iconNameRight : "chevron-right",
        iconColorRight : "#a7bfd3",
        onPress: () => selectedComponent("displayName")      
      },
      {
        title : "Cambiar @mail",
        iconNameLeft : "at",
        iconColorLeft : "#a7bfd3",
        iconNameRight : "chevron-right",
        iconColorRight : "#a7bfd3",
        onPress: () => selectedComponent("email")      
      },
      {
        title : "Cambiar Contraseña",
        iconNameLeft : "lock-reset",
        iconColorLeft : "#a7bfd3",
        iconNameRight : "chevron-right",
        iconColorRight : "#a7bfd3",
        onPress: () => selectedComponent("password")
      }
    ]
  }

  const menuOptions = generateOptions()
 
  return (
    <View >
       {
        map(menuOptions, (menu, index) => (
          <ListItem
             key ={index}
             style = {Styles.menuItem}
             onPress={menu.onPress}
          >
            <Icon
              type='material-community'
              name={menu.iconNameLeft}
              color={menu.iconColorLeft}
            />
            <ListItem.Content>
              <ListItem.Title>{ menu.title }</ListItem.Title>
            </ListItem.Content>
            <Icon
              type='material-community'
              name={menu.iconNameRight}
              color={menu.iconColorRight}
            />
          </ListItem>
        ))
       }
       <Modal 
          isVisible={showModal}
          setVisible={setShowModal}
       >  
          {
              renderComponent        
          }    
       </Modal>
    </View>
  )
}