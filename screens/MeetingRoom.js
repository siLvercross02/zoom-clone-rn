import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import StartMeeting from '../components/StartMeeting';
import { io } from 'socket.io-client';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';

let socket;

export default function MeetingRoom () {
    const [name, setName] = useState();
    const [roomID, setRoomID] = useState();
    const [activeUsers, setActiveUsers] = useState();
    const [startCamera, setStartCamera] = useState(false);

    const _startCamera = async() => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if(status === 'granted') {
            setStartCamera(true);
        } else {
            Alert.alert('Access Denied');
        }
    }

    const joinRoom = () => {
        _startCamera();
        socket.emit('join-room', { roomId: roomID, userName: name});
        
    }

    useEffect(() => {
        socket = io("http://192.168.100.17:8001");
        console.log('Connect to  Client')
        socket.on('connection', () => console.log('test'))
        socket.on('all-users', users => {  
            setActiveUsers(users)
            console.log(users);
        })
    }, [])

    return (
        <View style={styles.container}>
            {startCamera ? (
                <Camera
                    type="front"
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                >
                </Camera>
            ): (
                <StartMeeting 
                    name={name}
                    setName={setName}
                    roomID={roomID}
                    setRoomID={setRoomID}
                    joinRoom={joinRoom}
                />
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1
    },
})
