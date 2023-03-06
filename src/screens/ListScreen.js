import React from 'react';
import {Text, View, StyleSheet, FlatList, YellowBox} from 'react-native';

const ListScreen = () =>{
    const Language=[
        {Name:'c'},
        {Name:'c++'},
        {Name:'java'},
        {Name: 'javaScript'},
        {Name: 'GO'},
        {Name: 'kotlin'},
        {Name:'swift'},
        
        
    ];
    
    return (
    <View>
        <FlatList
        keyExtractor={Language => Persons.Name}
        data={Language}
        renderItem={({item})=> {
            return (
                <Text style={styles.textstyle}> {item.name}</Text>
            )
            }
        }
        />
    </View>

    );
    
};


const styles= StyleSheet.create({
    textstyle:{
        marginvetical:25,
        color:black,
        backgroundColor:Yellow,
    },
})
export  default ListScreen ;