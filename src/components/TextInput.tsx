import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export interface propsType {
    placeholder: any,
    value: string,
    onChange: any,
}

const TextInputComponent = (props: propsType) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChange}
                value={props.value}
                style={styles.input}
            />
        </View>
    )
};

export default TextInputComponent;

const styles = StyleSheet.create({
    inputView: {
        height: 50,
        width: '95%',
        padding: 5,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    input: {
        width: '100%',
        height: '100%',
        padding: 5,
        borderWidth: 0,
        borderColor: '#fff',
    },
});
