import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header () {
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#efefef" />
            <Text style={styles.heading}>Meet and Chat</Text>
            <Entypo name="new-message" size={30} color="#efefef" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    heading: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: '700',
    }
})
