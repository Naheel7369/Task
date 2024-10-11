import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/assets/Screens/HomeScreen';
import SignUP from './src/assets/Screens/SignUp Screen';
import TaskScreen from './src/assets/Screens/TaskScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import fonts from './android/app/src/main/assets/custom';
import {Text, View} from 'react-native';
// import
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: '#555555',
            fontFamily: fonts.GupterBold
            
          },
          // headerTitleAlign:'center'
        }}>
        <Stack.Screen
          name="SignUp"
          component={SignUP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // headerBackground: () => {
            //   return (
            //     <View style={{backgroundColor: 'red', height: 50}}>
            //       <Text>dasdasddas</Text>
            //     </View>
            //   );
            // },
          }}
        />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
