import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const PersonnalListScreen = () =>{
    const Persons=[
        {Name:'chinu', age: 20},
        {Name:'Tony', age:21},
        {Name:'harvard',age:22},
        {Name: 'stark',age:23},
        {Name: 'captian',age:24},
        {Name: 'Roger' ,age:25},
        {Name:'Winner',age:26},
        {Name: 'Payback', age:28},
        
    ];
    
    return (
    <View>
        <Text style={styles.headerStyle}>MAP FUNCTION</Text>
        <FlatList
        keyExtractor={Persons => Persons.Name}
        data={Persons}
        renderItem={({item})=> {
            return (
                <Text style={styles.textstyle}> {item.name} is : {item.age}</Text>
            )
            }
        }
        />
        <Text style={styles.textstyle}>  id is 1</Text>
    </View>

    );
    
};


const styles= StyleSheet.create({
    Headerstyle:{
        fonsize:24,
        color:grey
    },
    textstyle:{
        marginvetical:25,
        color: pouple,
        borderbuttomradus:24,
        bordercolor:pouple,
    },
})
export  default PersonnalListScreen ;