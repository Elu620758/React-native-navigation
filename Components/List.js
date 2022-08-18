
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NativeStackNavigationContainer } from "@react-navigation/native";
import { Text, Button, View, FlatList  } from "react-native";
// import Students from "../Nested Component/Students";


const NavigateTohome = props =>{
    props.navigation.navigate('Home')
}


const Stack = createNativeStackNavigator();


const Listscreen = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Homescreen"onPress={()=> NavigateTohome(props)}></Button>
      
      
          
                   




            {/* <NavigationContainer initialRouteName="Homes">
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="List" component={List} />
                </Stack.Navigator>
            </NavigationContainer> */}


      
      </View>
    );
  }

  export default Listscreen















/* import React from "react";

import { NativeStackNavigationContainer } from "@react-navigation/native";
import { Text, Button, View  } from "react-native";

const NavigateToDetails = props =>{
    props.Navigation.navigate('Movies')
}

const HomeScreen = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To Moviescteen"onPress={()=> NavigateToDetails(props)}></Button>
      </View>
    );
  }

  export default HomeScreen */