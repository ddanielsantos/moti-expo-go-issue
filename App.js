import { MotiView } from 'moti';
import { useState } from 'react';
import { Text, View, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [act, setAct] = useState(false)

  return (
    <View style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }} >
      <StatusBar style='dark' backgroundColor='#ffffff' translucent={false} />
      <Text
        style={{
          marginTop: 20
        }}
      >
        State: {act ? 'true' : 'false'}
      </Text>

      <Pressable
        onPress={() => setAct(!act)}
        style={{ backgroundColor: 'lightblue', width: 150, padding: 20, marginVertical: 20, borderRadius: 4 }}
      >
        <Text
          style={{ textAlign: 'center' }}  
        >
          Change backgroundColor
        </Text>  
      </Pressable>
        <MotiView
          from={ act ? {  backgroundColor: 'red' } : { backgroundColor: 'green' }}
          animate={ act ? {  backgroundColor: 'green' } : { backgroundColor: 'red' }}
          transition={{ duration: 800 }}
          style={{ width: 50, height: 50, borderColor: '#000000', borderWidth: 1, borderRadius: 4 }}
        />
    </View>
  );
}
