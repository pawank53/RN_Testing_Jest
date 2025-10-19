import { render, waitFor } from "@testing-library/react-native";
import UserProfile from "../../src/components/UserProfile";

describe('Test the UserProfile component', ()=>{
    beforeAll(()=>{
        jest.useFakeTimers();
    })
    it('Render initial text', ()=>{
        const {getByText}=render(<UserProfile/>)
        expect(getByText(/Loading user…/)).toBeTruthy()
    })
    it('Render user name after 1 second', async()=>{
        const{queryByText}= render(<UserProfile/>)
        jest.advanceTimersByTime(1000)
        await waitFor(()=>{
            expect(queryByText(/Welcome John !/)).toBeTruthy();
        })
    })
})