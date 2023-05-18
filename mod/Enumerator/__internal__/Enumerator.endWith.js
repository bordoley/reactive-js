/// <reference types="./Enumerator.endWith.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import Enumerator_concatWith from "./Enumerator.concatWith.js";
const Enumerator_endWith = (...values) => (observable) => pipe(observable, Enumerator_concatWith(pipe(values, ReadonlyArray_enumerate())));
export default Enumerator_endWith;
