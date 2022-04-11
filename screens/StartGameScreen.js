import {useState} from "react";
import {
    StyleSheet, Text, View, TextInput, Button
}
from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from '../constants/colors';

const StartGameScreen = props => {
    const [enterdValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const [message, setMessage] = useState('')
    const [validMesagge, setValidMessage] = useState(false)

    const onHandlerTextChange = text =>{
        //console.log(text);
        setEnteredValue(text.replace(/[0-9]^/g),"");
    }

    const handlerResetInput = () =>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const handlerConfirmInput = () =>{
        const choseNumber = parseInt(enterdValue)
        setValidMessage(true);
        if(choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) {
            setMessage('Número no válido');
            setEnteredValue('');
            return
        }else{
            setMessage('Número correctamente almacenado');
            setConfirmed(true);
            setSelectedNumber(parseInt(enterdValue));
            setEnteredValue('');
        }

        
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <View >
            {
                validMesagge? <Text>{message}</Text> : <Text>Todo Correcto</Text> 
            }
            </View>
            <Card style={styles.inputContainer}>
                <Text>Elige un número</Text>
                <Input
                    style={styles.input} 
                    blurOnSubmit
                    keyboardType="numeric"
                    autoCorrect={false}
                    autoCapitalizacion="none"
                    maxLength={10}
                    onChangeText={onHandlerTextChange}
                    value={enterdValue}
                />
                <View style={styles.buttonContainer}>
                    {/* <Button title="Limpiar" onPress={()=> {setEnteredValue('')}}/> */}
                    <Button title="Limpiar" onPress={handlerResetInput} color={Colors.secundary}/>
                    <Button title="Confirmar" onPress={handlerConfirmInput} color={Colors.success}/>
                </View>
                {
                    confirmed? <Button onPress={() => props.onStartGame(selectedNumber)} title="Start Game" color={Colors.primary}/> : null
                }
                
            </Card>
            

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },

    title:{
        fontSize:20,
        marginVertical:10
    },

    inputContainer:{
        backgroundColor:'#ffffff',
        justifyContent:'center',
        marginTop: 30
    },

    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },


});

export default StartGameScreen;