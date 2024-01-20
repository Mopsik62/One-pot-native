import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setSubstance, resetSubstance } from '../store/substanceSlice';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native';

export default function SubstanceScreen({ route }) {
    const {name} = route.params

    const dispatch = useDispatch();

    const {substance} = useSelector((store) => store.substance)

    const [imageLink, setImageLink] = useState("http://192.168.0.110:9000/substances/defaul.jpg")

    useEffect(() => {
        async function getOneSubstance() {
            await axiosInstance.get(`/substances/${name?.toString()}`).then((response) => dispatch(setSubstance(response?.data)));
        }

        getOneSubstance()

        return () => {
            dispatch(resetSubstance())
        }
    }, [dispatch])
    return (
        <View style={styles.container}>


            <Image
                style={styles.image}
                source= {{ uri: (substance.Image ? `http://192.168.0.110:9000/substances/${substance.Image.substring(substance.Image.lastIndexOf('/') + 1)}` : "http://192.168.0.110:9000/substances/default.jpg")}}
                resizeMode = 'contain'
            />
            <Text style = {styles.titleText}>{substance.Title}</Text>
            <Text>Статус: {substance.Status}</Text>
            <Text>Формула: {substance.Formula}</Text>
            <Text>Класс: {substance.Class}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    image: { height: 320, alignSelf: 'stretch' },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center'
    }
});