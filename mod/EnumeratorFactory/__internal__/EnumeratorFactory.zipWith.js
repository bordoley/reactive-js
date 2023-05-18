/// <reference types="./EnumeratorFactory.zipWith.d.ts" />

import EnumeratorFactory_zipMany from "./EnumeratorFactory.zipMany.js";
const EnumeratorFactory_zipWith = ((...tail) => (fst) => EnumeratorFactory_zipMany([
    fst,
    ...tail,
]));
export default EnumeratorFactory_zipWith;
