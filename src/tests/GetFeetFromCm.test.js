import GetFeetFromCm from "../util/GetFeetFromCm";

test('returns Error from null', () => {
    expect(GetFeetFromCm()).toBe('Error');
});
test('returns Error from "Lars"', () => {
    expect(GetFeetFromCm("Lars")).toBe("Error");
});