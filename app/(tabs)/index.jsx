import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.header}>
      <Link href={"/users"}>Go pages</Link>
      <Link href={"/modal"}>Go modal</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  }
})

export default index