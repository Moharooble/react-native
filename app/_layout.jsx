import { Stack } from 'expo-router'
import React from 'react'


const RootLayout = () => {
  return (
    <Stack screenOptions={{ 
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: "green" }, // Background color
      headerTintColor: "#Ff6094"
    }}>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />      
        <Stack.Screen name='users/index' options={{headerTitle: "pages"}} />      
        <Stack.Screen name='users/[id]' options={{headerTitle: "page info"}} />      
        <Stack.Screen name='modal' options={{presentation: 'card'}} />      
    </Stack>
  )
}

export default RootLayout

