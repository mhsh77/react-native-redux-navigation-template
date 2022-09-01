import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setname } from '../slice'
import Btn from '../components/Btn'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [name,setnamestate]=useState('')
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">LoginScreen</Text>
        <TextInput
        placeholder='Name'
        className="bg-white w-80 p-3 m-7 rounded-lg"
        value={name}
        onChangeText={(text)=>setnamestate(text)}
        />
        <Btn onPress={()=>{
            if(name==''){
                alert("enter a name")
            }else{
                dispatch(setname(name))
                navigation.navigate('Home')
            }
        
        }} title="set name"/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})