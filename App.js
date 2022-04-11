
import {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const [loaded] = useFonts({
    DMSans: require('./assets/fonts/DMSans-Regular.ttf'),
    DMSansBold: require('./assets/fonts/DMSans-Bold.ttf')
  })

  if(!loaded) return <AppLoading />


  const userNumberHandler = value => {
    setUserNumber(value);
  }

  let content = <StartGameScreen onStartGame={userNumberHandler}/>

  if(userNumber!=null){
    content = <GameScreen numSelect={userNumber} onBack={userNumberHandler}/> 
  }

  return (
    <View style={styles.container}>
      <Header textTitle="Este es el header"/>
      {content}
      {/* <StartGameScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    /* alignItems:'center',
    justifyContent:'flex-start' */
  },
});
