/// <reference types="./Enumerator.concatWith.d.ts" />

import Enumerator_concatMany from "./Enumerator.concatMany.js";
const Enumerator_concatWith = (...tail) => (fst) => Enumerator_concatMany([fst, ...tail]);
export default Enumerator_concatWith;
