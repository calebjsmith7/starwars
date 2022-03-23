import FirstAndLastNames from "../util/FirstAndLastNames";

test('returns Error from null', () => {
    expect(FirstAndLastNames()).toBe('Error');
});
test('returns Error from 0', () => {
    expect(FirstAndLastNames(0)).toBe('Error');
});
test('returns Darth Vader from DarthVader', () => {
    expect(FirstAndLastNames("Darth Vader")).toStrictEqual({first: 'Darth', last: 'Vader'});
});
test('returns Lars from Lars', () => {
    expect(FirstAndLastNames('Lars')).toStrictEqual({first: 'Lars', last: ""});
});