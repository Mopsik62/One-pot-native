import {View, Text, Button, Image} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

export default function SubstanceCard({ navigation, ...props}) {
    const handlePress = () => {
        navigation.navigate('Субстанция', {name: props.Title})
    }

    const [imageLink, setImageLink] = useState("http://192.168.0.110:9000/substances/default.jpg")

    useEffect(() => {
        if (props.Image) {
        const lastSlashIndex = props.Image.lastIndexOf('/');
        const imageName = props.Image.substring(lastSlashIndex + 1);
            setImageLink("http://192.168.0.110:9000/substances/" + imageName)
        }
    })

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source= {{ uri: imageLink}}
                resizeMode = 'contain'
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.Title}</Text>
            </View>
            <Button title='Подробнее' onPress={handlePress}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#000000', fontSize: 16, textAlign: 'center' },
    text: { color: '#f0f0f0', fontSize: 16 },
});