import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = ({onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View className="bg-blue-500 w-80 justify-center items-center p-3 rounded-lg">
            <Text className="font-bold text-white text-lg">{title}</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default Btn

const styles = StyleSheet.create({})