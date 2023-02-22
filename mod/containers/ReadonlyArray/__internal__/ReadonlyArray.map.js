/// <reference types="./ReadonlyArray.map.d.ts" />

const ReadonlyArray_map = (mapper) => (arr) => arr.map(mapper);
export default ReadonlyArray_map;
