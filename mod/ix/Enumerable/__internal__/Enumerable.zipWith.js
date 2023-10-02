/// <reference types="./Enumerable.zipWith.d.ts" />

import Enumerable_zipMany from "./Enumerable.zipMany.js";
const Enumerable_zipWith = ((...tail) => (fst) => Enumerable_zipMany([fst, ...tail]));
export default Enumerable_zipWith;
