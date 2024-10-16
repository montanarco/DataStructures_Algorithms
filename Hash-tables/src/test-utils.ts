export function assertEqual(value: any, expected: any) {
    if (value !== expected) {
        throw new Error(`Expected ${value} to equal ${expected}`);
    }
}