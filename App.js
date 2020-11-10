import React,{useState} from 'react'
import { 
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image

 } from 'react-native';

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App=()=>{
   const [uriValue,setUriValue]=useState(DiceOne)
    const [uriValue1,setUriValue1]=useState(DiceOne)

const onButtonClick =()=>{
  let randomNumber=Math.floor(Math.random()*6)+1
  let randomNumber1=Math.floor(Math.random()*6)+1
  switch (randomNumber) {
    case 1:
      setUriValue(DiceOne)
      break;
    case 2:
        setUriValue(DiceTwo)
        break;
    case 3:
          setUriValue(DiceThree)
          break;
    case 4:
      setUriValue(DiceFour)
      break;
    case 5:
      setUriValue(DiceFive)
      break;
    case 6:
      setUriValue(DiceSix)
      break;
    default:
      setUriValue(DiceOne)
      break;
  }

  switch (randomNumber1) {
    case 1:
      setUriValue1(DiceOne)
      break;
    case 2:
        setUriValue1(DiceTwo)
        break;
    case 3:
          setUriValue1(DiceThree)
          break;
    case 4:
      setUriValue1(DiceFour)
      break;
    case 5:
      setUriValue1(DiceFive)
      break;
    case 6:
      setUriValue1(DiceSix)
      break;
    default:
      setUriValue1(DiceOne)
      break;
  }

}
const resetClick=()=>{
  setUriValue(DiceOne);
  setUriValue1(DiceOne);
}
      return(
        <>
        <View style={styles.container}>
          <Image source={uriValue} style={styles.image}/>
          <Image source={uriValue1} style={styles.image}/>
          <TouchableOpacity onPress={onButtonClick} >
          <Text style={styles.text}>Play Game</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetClick} >
          <Text style={styles.text}>Reset Game</Text>
          </TouchableOpacity>
        </View>
        </>
      )
 
   
}

export default App



const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'black',
   alignItems: 'center',
   justifyContent: 'center'
  },
  text:{
  color:'white',
  fontSize:20,
  marginTop:30,
  borderColor:'pink',
  paddingHorizontal:20,
  paddingVertical:10,
  borderRadius:20,
  borderWidth:3,

  },
  image:{
  width:200,
  height:200
  }
})