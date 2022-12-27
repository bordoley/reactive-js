/// <reference types="./ReadonlyArrayLike.map.d.ts" />
const map = (mapper) => (arr) => arr.map(mapper);

export { map as default };
