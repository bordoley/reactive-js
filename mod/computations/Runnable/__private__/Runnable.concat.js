/// <reference types="./Runnable.concat.d.ts" />

import Runnable_concatMany from "./Runnable.concatMany.js";
const Runnable_concat = (...computations) => Runnable_concatMany(computations);
export default Runnable_concat;
