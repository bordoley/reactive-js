/// <reference types="./Enumerable.zip.d.ts" />

import Enumerable_zipMany from "./Enumerable.zipMany.js";
const Enumerable_zip = ((...enumerables) => Enumerable_zipMany(enumerables));
export default Enumerable_zip;
