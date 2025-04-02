/// <reference types="./Computation.empty.d.ts" />

import { bindMethod, memoize } from "../../../functions.js";
const Computation_empty = /*@__PURE__*/ memoize(m => m.genPure(bindMethod([], Symbol.iterator)));
export default Computation_empty;
