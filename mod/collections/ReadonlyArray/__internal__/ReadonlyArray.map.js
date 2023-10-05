/// <reference types="./ReadonlyArray.map.d.ts" />

const ReadonlyArray_map = (selector) => (arr) => arr.map(selector);
export default ReadonlyArray_map;
