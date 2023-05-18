/// <reference types="./EnumeratorFactory.concatWith.d.ts" />

import EnumeratorFactory_concatMany from "./EnumeratorFactory.concatMany.js";
const EnumeratorFactory_concatWith = ((...tail) => (fst) => EnumeratorFactory_concatMany([
    fst,
    ...tail,
]));
export default EnumeratorFactory_concatWith;
