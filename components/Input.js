import React from "react";
import {
    StyleSheet, TextInput
}
from 'react-native';

const Input = props => {

    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
        height:30,
        marginVertical:10
    }
});

export default Input;