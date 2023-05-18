/// <reference types="./Enumerator.zip.d.ts" />

import Enumerator_zipMany from "./Enumerator.zipMany.js";
const Enumerator_zip = (...enumerators) => Enumerator_zipMany(enumerators);
export default Enumerator_zip;
