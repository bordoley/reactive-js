/// <reference types="./Deferable.concatWith.d.ts" />

import Deferable_concatMany from "./Deferable.concatMany.js";
const Deferable_concatWith = (...tail) => (fst) => Deferable_concatMany([fst, ...tail]);
export default Deferable_concatWith;
