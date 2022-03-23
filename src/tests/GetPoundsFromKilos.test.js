import GetPoundsFromKilos from "../util/GetPoundsFromKilos";

test('returns Error from null', () => {
    expect(GetPoundsFromKilos()).toBe('Error');
});
test('returns Error from "Lars"', () => {
    expect(GetPoundsFromKilos("Lars")).toBe(NaN);
});
