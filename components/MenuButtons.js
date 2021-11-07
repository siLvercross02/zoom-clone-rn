import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const items = [
    {
        id: 1,
        name: "video-camera",
        title: 'New Meeting',
        customColor: '#ff751f'
    },
    {
        id: 2,
        name: "plus-square",
        title: 'Join'
    },
    {
        id: 3,
        name: "calendar",
        title: 'Schedule'
    },
    {
        id: 4,
        name: "upload",
        title: 'Share Screen'
    },
];

export default function MenuButtons ({ navigation }) {
    const openMeeting = () => {
        navigation.navigate('Room')
    }

    return (
        <View style={styles.container}>
            { items.map((item, index) => 
                <View 
                    key={index}
                    style={styles.buttonContainer} 
                >
                    <TouchableOpacity
                        style={{
                            ...styles.button,
                            backgroundColor: item.customColor ? item.customColor : '#0470dc'
                        }}
                        onPress={() => openMeeting()}
                    >
                        <FontAwesome name={item.name} size={23} color="#efefef" />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>{item.title}</Text>
                </View>
            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: '#1f1f1f',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1
    },
    menuText: {
        color: '#858585',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '600',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#0470dc',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
