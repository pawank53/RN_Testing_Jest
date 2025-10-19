import { fireEvent, render } from "@testing-library/react-native"
import Counter from "../../src/components/Counter"

describe('Testing Counter Component', ()=>{
    it('Counter text exist or not', ()=>{
        const {getByText}= render(<Counter/>)
        expect(getByText(/Counter/)).toBeTruthy();
    })
    it('Test increase button', ()=>{
        const {getByText}= render(<Counter/>)
        const button=getByText(/Increase/)
        fireEvent.press(button)
        expect(getByText(/Counter: 1/)).toBeTruthy();
    })
})