/// <reference types="./ReadonlyArray.reduceWithKey.d.ts" />

const ReadonlyArray_reduceWithKey = (reducer, initialValue) => (arr) => {
    const acc = initialValue();
    return arr.reduce(reducer, acc);
};
export default ReadonlyArray_reduceWithKey;
