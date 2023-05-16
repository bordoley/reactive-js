/// <reference types="./Enumerator.fromFactory.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe, returns } from "../../functions.js";
const Enumerator_fromFactory = 
/*@__PURE__*/ returns(f => pipe([f()], ReadonlyArray_enumerate()));
export default Enumerator_fromFactory;
