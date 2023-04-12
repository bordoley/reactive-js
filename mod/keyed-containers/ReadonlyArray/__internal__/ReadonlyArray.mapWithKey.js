/// <reference types="./ReadonlyArray.mapWithKey.d.ts" />

const ReadonlyArray_mapWithKey = (selector) => (arr) => arr.map(selector);
export default ReadonlyArray_mapWithKey;
