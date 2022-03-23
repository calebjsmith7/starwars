import GetFeetFromCm from "../util/GetFeetFromCm";

test('returns Error from null', () => {
    expect(GetFeetFromCm()).toBe('Error');
});
test('returns Error from "0"', () => {
    expect(GetFeetFromCm("0")).toBe('Error');
});