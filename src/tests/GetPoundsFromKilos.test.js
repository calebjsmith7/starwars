import GetPoundsFromKilos from "../util/GetPoundsFromKilos";

test('returns Error from null', () => {
    expect(GetPoundsFromKilos()).toBe('Error');
});
test('returns Error from "1"', () => {
    expect(GetPoundsFromKilos("1")).toBe('Error');
});
