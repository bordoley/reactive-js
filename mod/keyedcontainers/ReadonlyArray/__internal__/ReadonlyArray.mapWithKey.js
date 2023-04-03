/// <reference types="./ReadonlyArray.mapWithKey.d.ts" />

const ReadonlyArray_mapWithKey = (mapper) => (arr) => arr.map(mapper);
export default ReadonlyArray_mapWithKey;
