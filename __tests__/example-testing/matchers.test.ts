// test numbers
it("Testing numbers", ()=>{
    const a=10;
    expect(a).toBeTruthy();
    expect(a).not.toBeFalsy();
    expect(a).toBeGreaterThan(2);
    expect(a).toBeLessThan(20);
    expect(a).toBeCloseTo(a)
    expect(a).toEqual(10)
})
it("Not To Be Truthy", ()=>{
    const a=false;
    expect(a).not.toBeTruthy();
    expect(a).toBeFalsy();
})

it('Truthyness check', ()=>{
    const a=null;
    expect(a).toBeNull();
    expect(a).toBeDefined();
    expect(a).not.toBeUndefined();
    expect(a).toBeFalsy();
    expect(a).not.toBeTruthy();

    const b=0;
    expect(b).toBeFalsy();
    expect(b).not.toBeNull();
    expect(b).not.toBeTruthy();
    expect(b).toBeDefined();
})

it('String testing', ()=>{
    const a="pawan"
    expect(a).toMatch(/PAWAN/i)
    expect(a).not.toMatch('pk')
    expect(a).toMatch(/wa/)
    expect(a).toContain('wa')
})

it('Array testing', ()=>{
    const arr=["ASD", 'PAWAN', 'DFDVCDC', 'EGG', 'Apple']
    expect(arr).toContain('PAWAN');
    expect(arr).toContain('EGG');
})
const testFunction=()=>{
    throw new Error('Test function error')
}

it('Exception', ()=>{
    expect(()=> testFunction()).toThrow(Error)
    expect(()=> testFunction()).toThrow(/^Test function error$/)
})