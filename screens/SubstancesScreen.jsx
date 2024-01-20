import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { StyleSheet } from 'react-native'
import { setSubstances } from '../store/substanceSlice';
import SubstanceCard from '../components/SubstanceCard';

export default function SubstancesScreen({ navigation }) {
    const dispatch = useDispatch()
    const {substances} = useSelector((store) => store.substance)

    const handleTextChange = async (newText) => {
        try {
            const response = await axiosInstance.get('/substances?name_pattern=' + newText);
            dispatch(setSubstances(response?.data.Substances));
        } catch (error) {
            console.error('Error fetching substances:', error);

        }
    };

    useEffect(() => {
        async function getAllSubstances() {
            await axiosInstance.get('/substances')
                .then((response) => {

                    dispatch(setSubstances(response?.data.Substances));
                })
                .catch((error) => {
                    console.error('Error fetching substances:', error);
                });
        }
        getAllSubstances();
    }, [dispatch]);

    return (
        <ScrollView>
            <Text style={styles.welcomeText}>Добр пожаловать!</Text>
            <TextInput style={styles.input} onChangeText={newText => handleTextChange(newText)}></TextInput>
            <View style={styles.page}>
                {!!substances &&
                    substances.map((substance) => <SubstanceCard key={substance.ID} {...substance} navigation={navigation}></SubstanceCard>)
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'blue',  // Цвет текста, можете изменить
    },
});
