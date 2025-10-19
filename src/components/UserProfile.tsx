import { useEffect, useState } from "react";
import { Text, View } from "react-native"

const UserProfile=()=>{
    const [userName, setUserName]=useState('')
    const [loading, setloading]=useState(false)

    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
            setUserName('John')
            setloading(false)
        }, 1000)
    }, [])
    return(
        <View>
            {loading ? (
                <Text>Loading user…</Text>
            ) : (
                <Text>Welcome {userName} !</Text>
            )}
        </View>
    )
}
export default UserProfile;