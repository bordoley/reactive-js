/// <reference types="./ReadonlyArray.reduce.d.ts" />

const ReadonlyArray_reduce = (reducer, initialValue) => (arr) => {
    const acc = initialValue();
    return arr.reduce(reducer, acc);
};
export default ReadonlyArray_reduce;
