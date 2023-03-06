import React from "react";
import { Text, StyleSheet,Button, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Button
        onPress={()=>navigation.navigate('PersonnalListScreen ')}
        title='GO TO LISTSCREEN'  
      />

      <Button
        onPress={()=>navigation.navigate('ListScreen')}
        title='GO TO LIst LANGUAGES'  
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
