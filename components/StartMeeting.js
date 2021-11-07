import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function StartMeeting({ name, setName, roomID, setRoomID, joinRoom }) {

    return (
        <View style={styles.startMeetingContainer}>
            <View style={styles.info}>
                <TextInput 
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Name"
                    placeholderTextColor="#767476"
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.info}>
                <TextInput 
                    style={styles.textInput}
                    value={roomID}
                    placeholder="Enter Room ID"
                    placeholderTextColor="#767476"
                    onChangeText={text => setRoomID(text)}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.startMeetingButton}
                    onPress={() => joinRoom()}
                >
                    <Text 
                        style={{ color: 'white', fontWeight: 'bold' }}
                    >
                        Start Meeting
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    startMeetingButton: {},
    info: {
        width: '100%',
        backgroundColor: '#373538',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#484648',
        padding: 12,
        justifyContent: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 18,
    },
    startMeetingButton: {
        width: 330,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0470dc',
        height: 50,
        borderRadius: 15
    }
})