/// <reference types="./Computation.endWith.d.ts" />

import { pipe } from "../../../functions.js";
import Computation_fromReadonlyArray from "./Computation.fromReadonlyArray.js";
const Computation_endWith = ((m, ...values) => (computation) => m.concat(computation, pipe(values, Computation_fromReadonlyArray(m))));
export default Computation_endWith;
