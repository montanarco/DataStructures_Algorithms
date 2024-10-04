export const assertEqual = (value: any, expected:any) => {
    if (value !== expected) {
      throw new Error(`Expected ${value} to equal ${expected}`);
    }
  };


  export const assertEqualArrays = (arr1: any[], arr2: any[]) => {
    if (arr1.length !== arr2.length) {
        throw new Error(`Expected ${arr1} to equal ${arr2}`);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            throw new Error(`Expected ${arr1} to equal ${arr2}`);
        }
    }
}
