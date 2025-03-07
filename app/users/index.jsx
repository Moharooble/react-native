import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.header}>
      <Link href={"users/1"}>Go page 1</Link>
      <Link href={"users/2"}>Go page 2</Link>
      <Link href={"users/3"}>Go page 3</Link>
      <Link href={"users/4"}>Go page 4</Link>
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