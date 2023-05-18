/// <reference types="./ReadonlyArray.repeat.d.ts" />

const ReadonlyArray_repeat = (count) => (arr) => {
    let arrays = [];
    for (let i = 0; i < count; i++) {
        arrays.push(arr);
    }
    return arrays.flat(1);
};
export default ReadonlyArray_repeat;
