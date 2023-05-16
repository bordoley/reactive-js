/// <reference types="./Enumerator.fromValue.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe, returns } from "../../functions.js";
const Enumerator_fromValue = 
/*@__PURE__*/ returns(v => pipe([v], ReadonlyArray_enumerate()));
export default Enumerator_fromValue;
