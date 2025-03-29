/// <reference types="./Computation.startWith.d.ts" />

import { memoize, pipe } from "../../../functions.js";
import Computation_concatWith from "./Computation.concatWith.js";
import Computation_fromReadonlyArray from "./Computation.fromReadonlyArray.js";
const Computation_startWith = 
/*@__PURE__*/ memoize(m => (...values) => (computation) => pipe(values, Computation_fromReadonlyArray(m)(), Computation_concatWith(m)(computation)));
export default Computation_startWith;
