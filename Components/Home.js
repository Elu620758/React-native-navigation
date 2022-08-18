import React from "react";

import { NativeStackNavigationContainer } from "@react-navigation/native";
import { Text, Button, View  } from "react-native";

const NavigateToMovieDetails = props =>{
    props.navigation.navigate('List')
}

const HomeScreen = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go To List"onPress={()=> NavigateToMovieDetails(props)}></Button>
      </View>
    );
  }

  export default HomeScreen