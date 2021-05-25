import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './constants/colors'
import StartGame from './screens/StartGame/StartGame'

type RootStackParamList = {
  StartGame: undefined;
  GameOver: undefined;
  GameScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
      <RootStack.Screen 
        name="StartGame" 
        component={StartGame} 
        options={{
          title:"Advinhe o Número",
          headerStyle: {
            backgroundColor: Colors.primary,
            height:70,
          },
          headerTitleStyle: {
            alignSelf:"center",
            fontWeight:"bold"
          },
        }}
      />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

