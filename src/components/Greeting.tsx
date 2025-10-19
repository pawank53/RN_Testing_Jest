import { Text } from "react-native";

interface GreetingsProps{
    name:string,
    age: number
}

const Greeting=({name, age}:GreetingsProps)=>{
    return (
        <Text>{`Hello ${name} your age is ${age}`}</Text>
    )
}
export default Greeting;