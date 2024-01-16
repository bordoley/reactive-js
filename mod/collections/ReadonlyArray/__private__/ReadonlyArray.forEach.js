/// <reference types="./ReadonlyArray.forEach.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
const ReadonlyArray_forEach = (effect) => array => {
    for (let i = 0; i < array[Array_length]; i++) {
        effect(array[i], i);
    }
};
export default ReadonlyArray_forEach;
