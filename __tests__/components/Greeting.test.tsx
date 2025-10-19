import { render } from "@testing-library/react-native"
import Greeting from "../../src/components/Greeting"

describe('Testing greeting component', ()=>{
    it('Test either text is visible or not', ()=>{
        // getByText will find the Hello
        const {getByText}= render(<Greeting name="Aldrik" age={30}/>)
        expect(getByText(/Hello/)).toBeTruthy();
    })
})