import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Btn from '../components/Btn';

const HomeScreen = () => {
    const name = useSelector((state) => state.name.username)
    const dispatch = useDispatch()
    const navigation = useNavigation();
    useEffect(()=>{
        if(name ===null){
            navigation.replace("Login")}
    },[])
    return (
        <View className="flex-1 justify-center items-center">
        <Text className="font-bold text-5xl mb-5">Hi,<Text className="text-gray-500 font-light">{name}</Text>!</Text>
        <Btn title="Set name"onPress={()=>{navigation.replace("Login")}}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})