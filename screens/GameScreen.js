import { useState } from "react";
import {
    Text, View, Button, StyleSheet
} from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";



const GameScreen = props => {

    const {numSelect} = props;

    const [result, setResult] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [textR, setTextR] = useState('')

    const generateNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }

    const [currentGuess, setCurrentGuess] = useState(generateNumber(1, 100))

    let resultText = <Text style={styles.result}>{textR}</Text>

    const validMenor= () =>{
        setResult(true);
        if(numSelect < currentGuess){
            setTextR('Correcto, buen trabajo');
            setConfirmed(true);
        }else{
            setTextR('Incorrecto, verifica bien');
        }
    }

    const validMayor= () =>{
        setResult(true);
        if(numSelect > currentGuess){
            setTextR('Correcto, buen trabajo');
            setConfirmed(true);
        }else{
            setTextR('Incorrecto, verifica bien');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headTitles}>
            <Text style={styles.title}>Valida si tu número es Mayor o Menor a esta opción</Text>
            {
                result ? resultText : null
            }
            </View>
            <Card style={styles.contentGame}>
                <Text style={styles.randomNum}>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Menor" onPress={validMenor} color={colors.success}/>
                    <Button title="Mayor" onPress={validMayor} color={colors.success}/>
                </View>
            </Card>
            {
                confirmed? <Button onPress={() => props.onBack()} color={colors.primary} title="Regresar" /> : null
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'98%'
    },

    headTitles:{
        justifyContent:'center'
    },
    
    result:{
        textAlign:'center'

    },  

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 25,
        textAlign:'center'
    },

    randomNum:{
        fontSize:24,
        textAlign:'center',
        marginBottom:20
    },

    contentGame:{
        backgroundColor:'#ffffff',
        margin:20
    },

    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    }
})

export default GameScreen;