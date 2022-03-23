import CapitalizeFirstLetter from "./CapitalizeFirstLetter";

test('returns Capital from capital', () => {
    expect(CapitalizeFirstLetter('capital')).toBe('Capital');
});
test('returns Capital from Capital', () => {
    expect(CapitalizeFirstLetter('Capital')).toBe('Capital');
});
test('returns Error from 0', () => {
    expect(CapitalizeFirstLetter(0)).toBe('Error');
});
test('returns Error from 0Lars', () => {
    expect(CapitalizeFirstLetter("0Lars")).toBe('Error');
});
test('returns Error from Object', () => {
    expect(CapitalizeFirstLetter({character: 'Lars'})).toBe('Error');
});
test('returns Error from null', () => {
    expect(CapitalizeFirstLetter()).toBe('Error');
});