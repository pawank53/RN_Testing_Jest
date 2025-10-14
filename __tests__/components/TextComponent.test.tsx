import { render, screen } from "@testing-library/react-native"
import TextComponent from "../../src/components/TextComponent"

describe('Testing Text component', ()=>{
    it("Text component have some text ",() =>{
        const {getByText}= render(<TextComponent/>)
        expect(getByText(/text/)).toBeOnTheScreen();
    })
})