import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Counter=()=>{
    const [counter, setCounter]=useState(0)

    const handleCounter=()=>{
        setCounter(counter+1)
    }
    return (
        <View>
            <Text style={styles.txt}>Counter: {counter}</Text>
            <TouchableOpacity onPress={handleCounter} style={styles.btn}>
                <Text style={styles.txt}>Increase</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    txt:{
        fontSize:20,
        fontWeight:'heavy',
        color:'#fff'
    },
    btn:{
        borderRadius:10,
        padding:5,
        marginVertical:10,
        backgroundColor:'rgba(32, 238, 105, 1)',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Counter;