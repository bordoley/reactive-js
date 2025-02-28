/// <reference types="./Runnable.concatWith.d.ts" />

import Runnable_concatMany from "./Runnable.concatMany.js";
const Runnable_concatWith = (...tail) => (fst) => Runnable_concatMany([fst, ...tail]);
export default Runnable_concatWith;
