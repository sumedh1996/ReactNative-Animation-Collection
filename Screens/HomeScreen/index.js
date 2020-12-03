import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Button onPress={() => navigation.navigate('Animation1')} title={'Animation1: Countdown Timer Animation with FlatList and Animated API'} />
            <Button onPress={() => navigation.navigate('Animation2')} title={'Animation2: Test Animation'} />
        </View>
    )
}
