import React from 'react';
import { Button, Image, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={{ flex:1, backgroundColor: '#89cff0' }}>
      <Image source={require('../LoginUI/assets/hero1.jpg')}
        style={{
          width: 100,
          height: 100,
          top: 30,
          position: 'absolute',
          borderRadius: 20,
          transform: [
            { translateX: 20 },
            { translateY: 50 },
            { rotate: '-15deg' }
          ]

        }} />
      <Image source={require('../LoginUI/assets/hero2.jpg')}
        style={{
          width: 100,
          height: 100,
          left: 100,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-5deg" }

          ]
        }}
      />
      <Image source={require('../LoginUI/assets/hero2.jpg')}
        style={{
          width: 100,
          height: 100,
          top: 170,
          left: -40,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "15deg" }

          ]
        }}
      />
      <Image source={require('../LoginUI/assets/hero3.jpg')}
        style={{
          width: 200,
          height: 200,
          left: 100,
          top: 130,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-15deg" }

          ]
        }}
      />
      <View style={{flex:1}}>
        <Text style={{
          fontSize: 50,
          fontWeight: 800,
          color: '#fff',
          left: 20,
          top: 430,
        }}>Let's Get</Text>
        <Text style={{
          fontSize: 46,
          fontWeight: 800,
          color: '#fff',
          left: 20,
          top: 430,
        }}>Started</Text>
        <Text
        style={{
          color:'#fff',
          left:20,
          top:480,
          fontSize:20
        }}
        >Connect with each other with chatting</Text>
         <Text
        style={{
          color:'#fff',
          left:20,
          top:490,
          fontSize:20
        }}
        >Calling, Enjoy Safe and private texting</Text>
      </View>
      <View
       style={styles.button}>
       <Text style={styles.text}>TRY ME</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'white',
    bottom:20,
    height:70,
    width:350,
    borderRadius:20,
    alignSelf:'center',
},
text:{
  alignContent:'center',
  alignSelf:'center',
  top:15,
  fontWeight:'bold',
  fontSize:30,
}
})


export default App;