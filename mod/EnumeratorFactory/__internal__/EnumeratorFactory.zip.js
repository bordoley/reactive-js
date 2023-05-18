/// <reference types="./EnumeratorFactory.zip.d.ts" />

import EnumeratorFactory_zipMany from "./EnumeratorFactory.zipMany.js";
const EnumeratorFactory_zip = ((...factories) => EnumeratorFactory_zipMany(factories));
export default EnumeratorFactory_zip;
