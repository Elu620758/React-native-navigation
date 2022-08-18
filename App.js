import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import HomeScreen from './Components/Home';
import Listscreen from './Components/List'


  const Stack = createNativeStackNavigator();



        export default function App() {                
            return (
              <SafeAreaView style={styles.container}>
                    <NavigationContainer initialRouteName="Homes">
                      <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="List" component={Listscreen} />
                      </Stack.Navigator>
                    </NavigationContainer>
              </SafeAreaView>
            );                                    
          };

          const styles = StyleSheet.create({
            container: {                    
              backgroundColor:'pink',
              flex: 1,
              marginTop: StatusBar.currentHeight || 0,
            },
            item: {
              marginTop:20,
              backgroundColor: 'lightblue',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            },
            title: {
              fontSize: 32,
            },
          });