import {sum} from '../../src/example-testing/sum'

test('testing sum', ()=>{
    expect(sum(2, 2)).toBe(4)
})