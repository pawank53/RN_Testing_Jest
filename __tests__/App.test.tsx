import {render, screen} from '@testing-library/react-native'

import App from '../App'
import { StatusBar } from 'react-native'

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context',()=>({
  SafeAreaProvider: ({children}:any)=> children,
  useSafeAreaInsets: ()=> ({top:0, right:0, bottom:0, left:0})
}))


// Mock useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', ()=>({
  __esModule:true,
  default: jest.fn()
}))

const mockColorScheme= require('react-native/Libraries/Utilities/useColorScheme').default;


describe('Unit testing for App', ()=>{
  // Testsing either App has text hello
  it('It should render properly', ()=>{
    const {getByText}=render(<App/>)
    expect(getByText(/Hello/i)).toBeOnTheScreen();
  })

  // Test cases for status bar
  it('Status bar testing for dark', ()=>{
    mockColorScheme.mockReturnValue('dark')
    const {UNSAFE_getByType}= render(<App/>);
    const bar= UNSAFE_getByType(StatusBar)
    expect(bar.props.barStyle).toBe('light-content')
  })

  it('Status Bar testing for light', ()=>{
    mockColorScheme.mockReturnValue('light')
    const {UNSAFE_getByType}= render(<App/>)
    const bar= UNSAFE_getByType(StatusBar)
    expect(bar.props.barStyle).toBe('dark-content')
  })
})