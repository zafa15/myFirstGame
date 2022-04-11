import react from "react";
import {
    StyleSheet, Text, View
}
from 'react-native';

const Header = (props) => {

    const {textTitle} = props

    return(
        <View style={styles.HeaderContent}>
            <Text style={styles.HeaderTitle}>{textTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContent:{
        width: '100%',
        backgroundColor: '#ec111a',
        height: 60,
        padding: 12,
        textAlign:'center'
    },

    HeaderTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff'
    }
});

export default Header;