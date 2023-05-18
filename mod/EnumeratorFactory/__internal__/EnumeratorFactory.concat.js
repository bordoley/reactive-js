/// <reference types="./EnumeratorFactory.concat.d.ts" />

import EnumeratorFactory_concatMany from "./EnumeratorFactory.concatMany.js";
const EnumeratorFactory_concat = (...factories) => EnumeratorFactory_concatMany(factories);
export default EnumeratorFactory_concat;
