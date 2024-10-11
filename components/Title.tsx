import React from 'react';
import { Text, StyleSheet, TextStyle, View } from 'react-native';
import fonts from '../android/app/src/main/assets/custom';

type TitleProps = {
    children: React.ReactNode;
};

function Title({ children }: TitleProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        backgroundColor:'#000000',
        borderRadius:14,
        overflow:'hidden',
        justifyContent:'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#030303',
        padding: 12,
        fontFamily: fonts.GupterBold,
        width: '50%',
    } as TextStyle,
});

