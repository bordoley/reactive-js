/// <reference types="./Computation.concatWith.d.ts" />

import { memoize } from "../../../functions.js";
const Computation_concatWith = 
/*@__PURE__*/ memoize(m => (...tail) => (fst) => m.concat(fst, ...tail));
export default Computation_concatWith;
