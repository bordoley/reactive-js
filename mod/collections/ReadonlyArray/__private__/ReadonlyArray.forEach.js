/// <reference types="./ReadonlyArray.forEach.d.ts" />

const ReadonlyArray_forEach = (effect) => array => {
    for (let i = 0; i < array.length; i++) {
        effect(array[i], i);
    }
};
export default ReadonlyArray_forEach;
