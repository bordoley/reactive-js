/// <reference types="./ReadonlyArrayLike.some.d.ts" />
const some = (predicate) => arr => arr.some(predicate);

export { some as default };
