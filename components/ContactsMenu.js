import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactsMenuButtons = [
    {
        type: 'starred',
        name: 'Starred'
    },
    {
        type: 'contact',
        name: 'Jessy The',
        photo: require('../assets/img3.jpg'),
    },
    {
        type: 'contact',
        name: 'John Doe',
        photo: require('../assets/img1.jpg'),
    },
    {
        type: 'contact',
        name: 'Alex Doe',
        photo: require('../assets/img2.jpg'),
    },
]

export default function ContactsMenu () {
    return (
        <View style={styles.container}>
            {contactsMenuButtons.map((contact, index) => 
                <View style={styles.row} key={index}>
                    {/* image */}
                    {contact.type === 'starred' ? (
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#efefef" /> 
                        </View> ) :
                        (
                            <Image source={contact.photo} style={styles.image}/>
                        )
                    }
                    {/* text */}
                    <Text style={styles.text}>
                        {contact.name}
                    </Text>
                </View>
            )}  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 18
    },
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    }
})
