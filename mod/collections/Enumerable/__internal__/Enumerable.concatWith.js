/// <reference types="./Enumerable.concatWith.d.ts" />

import Enumerable_concatMany from "./Enumerable.concatMany.js";
const Enumerable_concatWith = (snd, ...tail) => (fst) => Enumerable_concatMany([fst, snd, ...tail]);
export default Enumerable_concatWith;
