/// <reference types="./Computation.empty.d.ts" />

import { bindMethod, memoize, returns } from "../../../functions.js";
const Computation_empty = /*@__PURE__*/ memoize(m => returns(m.genPure(bindMethod([], Symbol.iterator))));
export default Computation_empty;
