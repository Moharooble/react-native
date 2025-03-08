import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams} from 'expo-router'

const UserInfo = () => {
  const info = useLocalSearchParams()
  return (
    <View>
      <Text>UserInfo {info.id}</Text>
    </View>
  )
}

export default UserInfo