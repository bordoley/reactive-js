/// <reference types="./ReadonlyArray.map.d.ts" />
const ReadonlyArray_map = (mapper) => (arr) => arr.map(mapper);

export { ReadonlyArray_map as default };
