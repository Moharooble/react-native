import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


const TabLayout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "black",
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: "#007AFF" }, // Background color
      headerTintColor: "#fff"
    }}>
      <Tabs.Screen name='index'
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) => (
            // <FontAwesome name="home" size={size} />
            <Ionicons name="home-outline" size={size} color={color}/>
          )
        }}
       />
      <Tabs.Screen name='profile'
       options={{
        title: "Profile",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="add-circle-outline" size={size} color={color}/>
          
        )
       }}
       />
      <Tabs.Screen name='report'
       options={{
        title: "report",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="pie-chart-outline" size={size} color={color}/>
          
        )
       }}
       />
    </Tabs>
  )
}

export default TabLayout
