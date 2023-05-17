/// <reference types="./Enumerator.zipWith.d.ts" />

import Enumerator_zipMany from "./Enumerator.zipMany.js";
const Enumerator_zipWith = ((...tail) => (fst) => Enumerator_zipMany([fst, ...tail]));
export default Enumerator_zipWith;
